import { useState } from 'react';
import './flash.css';
const Data =[{frontSide:'What language is react Based on?',
    backSide:'Javascript',
    isOpen:false,
    id:1
},
{frontSide:'how to pass data from parent to child component?',
    backSide:'using Props',
    isOpen:false,
    id:4
},{frontSide:'What language is react Based on?',
    backSide:'Javascript',
    isOpen:false,
    id:2
},
{frontSide:'how to pass data from parent to child component?',
    backSide:'using Props',
    isOpen:true,
    id:3
}]
export default  function FlashCards(){
    const [data,setData] = useState(Data);
    console.log(data);
    function handleChange(id){
        setData((data)=>data.map((cur)=>cur.id===id?{...cur,isOpen:cur.isOpen==true?false:true}:{...cur}));
        console.log(data);
    }

    return<div className="main">
        {data.map((cur)=><Card cur={cur}/>)}
    </div>
    function Card({cur}){
        return<div className={`card${cur.isOpen?'active':''}`}  onClick={()=>handleChange(cur.id)}>
             {cur.isOpen?<p>{cur.backSide}</p>:<p>{cur.frontSide}</p>} 
        </div>
    }
}