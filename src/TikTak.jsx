import { useState } from "react";

function TikTak(){
    return <div className="main-container">

  <Main/>     
        
    </div>
}
export default TikTak;

function Main(){

 const [state,setState] = useState((Array.from({length:9})).map(()=>null)); 
 const [isXturn,setIsXturn] = useState(true);  
 console.log(state);
 function handleClick(index){
     let newState = [...state];
     if(newState[index] || checkWinner(state)) return;
     newState[index] = isXturn? 'X':'O';
     setState(newState);
     setIsXturn(!isXturn);
     
     
 }
 const winner = checkWinner(state);
     if(winner){
        console.log('win')
     }else{
         console.log('no win')
     }
 function checkWinner(){
    const possibleWinners = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     ];
     for(let i=0;i<possibleWinners.length; i++){
        const [a,b,c] = possibleWinners[i];
        if(state[a] !==null&& state[a] === state[b] && state[a] === state[c]){
              return true;
     }else return false;
    }
 }
 return <div  style={{display:'flex',flexDirection:'column'}}>
        
        <div className="row" style={{display:'flex'}}>
    <Square handleClick = {handleClick} stateValue={state[0]} stateAt={0}  />
    <Square handleClick = {handleClick} stateValue={state[1]} stateAt={1}/>
    <Square handleClick = {handleClick} stateValue={state[2]} stateAt={2}/>
        </div>

    <div className="row" style={{display:'flex'}}>
    <Square handleClick = {handleClick} stateValue={state[3]} stateAt={3}/>
    <Square handleClick = {handleClick} stateValue={state[4]} stateAt={4}/>
    <Square handleClick = {handleClick} stateValue={state[5]} stateAt={5}/>
    </div>

    <div className="row" style={{display:'flex'}}>
    <Square handleClick = {handleClick} stateValue={state[6]} stateAt={6}/>
    <Square handleClick = {handleClick} stateValue={state[7]} stateAt={7}/>
    <Square handleClick = {handleClick} stateValue={state[8]} stateAt={8}/>
    </div>

    </div>
}
function Square({stateAt,stateValue,handleClick}){
    return<div className="square" style={
        {display:'flex',justifyContent:"center",
      alignItems:'center',
      height:'70px',width:'70px',
      border:'1px solid rgb(51, 50, 56)'}  
    } 
    value = {stateValue}
    onClick={()=>handleClick(stateAt)}>
        {stateValue}
    </div>
}