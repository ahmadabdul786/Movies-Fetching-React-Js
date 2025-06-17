import { useState } from 'react';
import './Budget.css';

function Budgety(){
const [exp,setExp] = useState([]);
const [inc,setInc] = useState([]);

const data = {
    income:inc,
    expense:exp,
 total:{inc:0,exp:0},
 budget:0
};

 function handleInput(newItem,type){
    if(type==='inc'){
    setInc((inc)=>[...inc,newItem]);
  }else if(type==='exp'){
    setExp((exp)=>{return[...exp,newItem];
    });
  }
 }
 function deleteItem(id,type){
  if(type==='inc'){
    setInc(inc.filter((item)=>item.ID!==id));
  }
  else if(type==='exp'){
    setExp(exp.filter((item)=>item.ID!==id));
  }
 }
 function calculateBudget(data){
   
    data.income.map((item)=>{
   data.total.inc = data.total.inc + item.value;   
   })
 data.expense.map((item)=>{
    data.total.exp = data.total.exp + item.value;
 })
 
    data.budget= data.total.inc-data.total.exp;
 

  
}
calculateBudget(data);
  return<div>
     <Displaybudget data={data}/>
     <TakeInput  onAddNewInput={handleInput} />
     {<ListItems data={data} deleteItem={deleteItem}/>}
    </div>
}


function Displaybudget({data}){
 
  let budget = data.budget;
  let inc = data.total.inc;
let exp = data.total.exp;

  return<div className="topSection">
    
    <div className='top-container-text'>
        <p>Available Budget in month</p>
    </div>
    
    <div className='top-container-budget'>
        <p>{budget.toFixed(2)}</p>
    </div>
    <div>
    
     <div className='total-inc'>
           <p>Income</p>
           <p>+ {inc.toFixed(2)}</p>
        </div>
        <div className='total-exp'>
        <p>Expense</p>
        <p>- {exp.toFixed(2)}</p>
        </div>
    </div>
</div>
}
function TakeInput({onAddNewInput}){
    const [description,setDescription] = useState('');
const [value,setValue]= useState(null);
const [type,setType] = useState('inc');
    function handleSubmit(){
  let newItem = {};   
        if(description!=='' && value!==''){
 if(type==='inc'){
   newItem = {type,description,value,ID:Date.now()};
 }
 else if(type==='exp'){
   newItem ={type,description,value,perc:-1,ID:Date.now()};
   
 }
            onAddNewInput(newItem,type);
            
        }
        setType('inc');
        setDescription('');
        setValue('');
    }
return<div className='input-container'>
   
    <div>
        <select value={type} onChange={(e)=>setType(e.target.value)}>
            <option value='inc'>+</option>
            <option value='exp'>-</option>
        </select>
    </div>
    <div>
        <input className='input-des'
        value={description}
         type='text'
          onChange={(e)=>setDescription(e.target.value)} 
          placeholder='add description'  />
    </div>
    <div>
        <input className='input-val' value={value} type='number' 
         onChange={(e)=>setValue(parseFloat(e.target.value))} 
         placeholder='value'  />
    </div>
    <div>
        <button onClick={handleSubmit}>✔</button>
    </div>
</div>
}
function ListItems({data,deleteItem}){

return<div className='list-container'>
    <div className='list'>
         <p className='inc-text'>Income</p>
    { <div className='list-item'>
       {data.income.map((item)=>{
        if(item.type==='inc'){
        return<IncList item={item} deleteItem={deleteItem}/>
      }
       })}
       
       </div> }  
       
    </div>
  
    <div className='list'>
        <p className='exp-text'>Expense</p>
       <div className='list-item'>
       {data.expense.map((item)=>{
       if(item.type==='exp')
           return<ExpList item={item} deleteItem={deleteItem}/>
})}
       </div>
    </div>
    

</div>
function IncList({item,deleteItem}){
 let value = item.value;
 return<ul>
        <li>
            <p>
           {item.description} 
            </p>
            <p className='peasy'>
          {value.toFixed(2)}
            </p>
          <i onClick={()=>deleteItem(item.ID,item.type)}>❌</i>
        </li>
    </ul>
}
}
function ExpList({item,deleteItem}){
    let value = item.value;
    
    return<ul>
        <li>
            <p>
           {item.description} 
            </p>
            <p className='peasy'>
          {value.toFixed(2)}
            </p>
          <i onClick={()=>deleteItem(item.ID,item.type)}>❌</i>
        </li>
    </ul>
}
export default Budgety;