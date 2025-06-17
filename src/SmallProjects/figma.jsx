import { FaReact,FaDribbble,FaBehance,FaGem,FaCopy} from 'react-icons/fa';
import './figma.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
crossorigin="anonymous" referrerpolicy="no-referrer" />


export default function Figma(){
    return<main className='main'>
        <Section0/>
        <Section1/>
        <Section3/>
        <Section4/>
        <Section5/>
        
    </main>
}

function Section0(){
    return<section className="section-0" id='0'>
    <div className='overlay'>
    </div> 
    <NavBar/>
    <TopText/>     
   <Button key ='create-account'/>
    
 
 <div className='arrow'>
    <i className="fas fa-arrow-down"></i>
 </div>
 
    </section>
}
function NavBar(){
    return<div className='navbar'>
    <p>Home</p>
    <p>Features</p>
    <p>pricing</p>
    <p>Blog</p>
    <p><FaDribbble size={12}/></p>
    <p><FaBehance/></p>
   </div>
}
function TopText(){
    return<div className='textBox'>
    <h1>Forget about Code </h1>
    <p>
        Startup Framework gives you complete
         freedom over your creative process — 
         you don’t have to think about any technical aspects.
         There are no limits and absolutely no coding.
     </p>
     <div className='checkBox'>
    <input type='checkbox' value={true}/>
    <input type='checkbox' />
    <input type='checkbox' />
    <input type='checkbox' />
 </div>

 </div>
}
function Button(){
    return<div className='create-account'>
    <button>Create An Account</button>
 </div>
}


function Section1(){
return<section className='section-1' id='1'>
<div className='imgbox'>
 
  <div className='imgdiv'>
 
  </div>
  <div className='overlay-1'></div>
 <div className='textBox-1'>
    <h1>
    Powerful Generator and Free Figma Sources 
    </h1>
    <p>
    Startup Framework contains components and complex
     blocks which can easily be integrated into almost 
     any design. All of the components are made in the same style, and 
     can easily be integrated into projects, 
     allowing you to create hundreds of solutions.
    </p>
 </div>
 </div>

</section>
}
function Section3(){
    return<section className='section-3'>
        <div className='imgbox-3'>
         <div className='overlay-3'></div>
         <div className='Rectangle'></div>
         <div className='textBox-3'>
            <div className='upper-text-box'>
                <h1>We Create Something New</h1>
                <p>We have created a new product that will help designers, developers 
                and companies reate websites for their startups quickly and easily.</p>
            </div>
            <div className='lower-text-box'>
              <div>
<FaCopy color='white' size='30' />
<h4>30 New feature pages</h4>
<p>Startup Framework contains components and complex blocks which can easily. </p>
              </div>
              <div>
<FaGem color='white' size='30'/>
<h4>30 New feature pages</h4>
<p>Startup Framework contains components and 
    complex blocks which can easily. </p>

              </div>
            </div>
         </div>
        </div>
       

    </section>
}

function Section4(){
    return<section className='section-4'>
        <div className='overlay-4'></div>
        <div className='textBox-4'>   
        <h1>
            We solve digital problems with an outstanding creative flare
            </h1>
            <p>
            We have created a new product that will help designers, developers and
             companies create websites for their startups quickly and easily
              come and have a look
            </p>
        </div>
        <div className='signIn-form'>
            <div className='login-box'>
                <div className='sign-up'>sign up</div>
                <div className='LogIn'>log in</div>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='Email'className='input1'/>
                <input type='text' placeholder='Password'/>
                <div className='button-box'>
                    
                <button className='Acc-btn'>Create an Account</button>
                <button className='twitter-btn'>Login via Twitter</button>
                </div>
            </div>
        </div>

    </section>
    
}

function Section5(){
    return<section className = 'section-5'>
    <h1>Our Happy Client </h1>
    <div className='client-box'>
    
        <div> a</div>
        <div>b</div>
    

        <div>c</div>
        <div>d</div>
    
    </div>
    </section>
}
