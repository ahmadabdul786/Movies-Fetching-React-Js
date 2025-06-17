import { useState } from 'react';
import './step.css';
const messages =[
    'Learn React *',
    'Apply for job *',
'Invest your new Income'
]

function StepComp(){
    const [step,setStep] = useState(1);
    const [close,setClose] = useState(true);
    function handlePrevious(){
     if(step>1){
        setStep((step)=>step-1);
    }
    }
    function handleNext(){
     if(step<3)
        setStep((step)=>step+1);
    }
    function handleClose(){
        setClose((close)=>!close);
    }

return(<>
<div className='mainn'>


  <ContentShower
     close={close}
      step={step}
       handleNext={handleNext} 
       handleClose={handleClose}
        handlePrevious={handlePrevious}/>
        
<div className='close' onClick={handleClose}>
    &times;
 </div>
</div>
</>)
}

function Button({text,onClickHandler}){
    return<>
    <button className='btnn' onClick={onClickHandler}
    >
        {text}
    </button>
    </>
}
function ContentShower({close,step,handlePrevious,handleNext}){
   
   return<>{close&&<div className='contain'> 
        <div className="numbers" >

            <div className={`${step>=1?'active':''}`}>1</div>
            <div className={`${step>=2?'active':''}`}>2</div>
            <div className={`${step>=3?'active':''}`}>3</div>
        </div>

        <p>{step}:{messages[step-1]}</p>

        <div className='button'>
        <Button text='Previous' onClickHandler= {handlePrevious}/>
        <Button text= 'next' onClickHandler={handleNext}/>
        </div>

        </div>}</>
}
export default StepComp;
/**function StepComp(){
    return<div className='contain'>
       <div className='main'>
        <div className='numbers'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
       </div>
       </div>
    </div>
}
export default StepComp;
**/