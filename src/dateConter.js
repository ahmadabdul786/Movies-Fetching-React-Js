import { useReducer, useState } from "react";
/** 
function DateCounter(){
const [count,setCount] = useState(1);
const [gap,setGap] = useState(1);

function handleSub(){
    if(count>1){
    setCount((count)=>count-gap);
}
}
function handleSum(){
    setCount((count)=>count+gap);
}
function resetValues(){
    setCount(1);
    setGap(1);
}
let date = new Date();
 date.setDate(date.getDate()+count);
console.log(date.toDateString());

return <>

<div className="Gap">

<input style={{display:'block'}}
 type="range" max={10} min={1} value={gap} 
 onChange={(e)=>setGap(Number(e.target.value))}/>

<p style={{display:'inline-block'}}>Gap</p>

<button onClick={()=>setGap((gap)=>gap-1)} >-</button>
<input type="number" value={gap}/>

<button onClick={()=>setGap((gap)=>gap+1)} >+</button>

</div>

<div className="Counter">
<p style={{display:'inline-block'}}>Counter</p>
<button onClick={handleSub}>-</button>
<span>{count}</span>
<button onClick={handleSum}>+</button>

</div>
{count>=1 && 
<p>
    from Today {new Date().toLocaleDateString()} after {count} {count===1?'day':'days'}
     {''} this will be {date.toDateString()}
</p>}
<button onClick={resetValues}>Reset</button>
</>
}
export default DateCounter;
*/
function reducer(state,action){
 if(action.type==='inc'){
    return state+action.payLoad;
 }  
 else if(action.type==='dec'){
    return state-action.payLoad;
 }
 else if(action.type ==='inp'){
    return action.payLoad
 }
}
function DateCounter(){

const [count,dispatch] =useReducer(reducer,0);

//const [count,setCount] = useState(1);
const [gap,setGap] = useState(0);

const handleSub = function (){
dispatch({type:'dec',payLoad:gap});
}
const handleSum = function(){
dispatch({type:'inc',payLoad:gap});
}

function handleInput (e){
    dispatch({type:'inp',payLoad:Number(e.target.value)});
}
function resetValues(){
  //  setCount(1);
    setGap(1);
}
let date = new Date();
 date.setDate(date.getDate()+count);
console.log(date.toDateString());

return <>

<div className="Gap">

<input style={{display:'block'}}
 type="range" max={10} min={1} value={gap} 
 onChange={(e)=>setGap(Number(e.target.value))}/>

<lable style={{display:'inline-block'}}>Gap</lable>

<button onClick={()=>setGap((gap)=>gap-1)} >-</button>

<input type="number" value={gap} onChange={(e)=>handleInput(e)}/>

<button onClick={()=>setGap((gap)=>gap+1)} >+</button>

</div>

<div className="Counter">
<p style={{display:'inline-block'}}>Counter</p>
<button onClick={handleSub}>-</button>
<span>{count}</span>

<button onClick={handleSum}>+</button>

</div>
{count>=1 && 
<p>
    from Today {new Date().toLocaleDateString()} after {count} {count===1?'day':'days'}
     {''} this will be {date.toDateString()}
</p>}
<button onClick={resetValues}>Reset</button>
</>
}


export default DateCounter;