function ProfileCard(){
 
    function SkillsShower(){
        
        return<div style={{display:"flex",columnGap:'10px'}}>
         <Skills skill = 'Javascript' color = 'green' BgColor='orange'/>
         <Skills skill = 'HTML' color = 'green' BgColor='red'/>
         
         <Skills skill = 'CSS' color = 'white' BgColor='blue'/>
         </div>
    }
    function Skills({skill,color,BgColor}){
        
        return<div>
            <p style={{color:color, fontSize:'15px' ,backgroundColor:BgColor }}>{skill}</p>
        </div>
    }

 return   <div>
    <div>
    <img style={{height:'150px',width:'300px',
         objectFit:'contain',backgroundColor:'gray'}} 
         src= "./pizzas/123.jpg" alt=""/>
    
    </div>
         <div style={{marginTop:'30px', paddingLeft:'20px', paddingRight:'20px'}}>
         <h2>Ahmad Abdul Rehman</h2>
         <p>Front End deveploper with having some skills mentioned below 
            .He is working on javascript learning from 4years and have a 
            very good understanding about all the concepts of javascript
            Today or tomorrow with the help of Allah Almighty he Will be a
            a very good application delevoper
         </p>
         </div>
         <SkillsShower/>
  </div>

}
export default ProfileCard;
