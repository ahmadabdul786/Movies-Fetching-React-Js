import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import ProfileCard from "./profileCard";
//import StepComp from "./stepComp";
//import DateCounter from "./dateConter";
//import FlashCards from "./flashCards";
//import Budgety from "./Budgety";
//import UsePopCorn from "./usePopcorn";
//import StarRating from "./StarRating";
//import TabComp from "./TabComp";
//import TikTak from "./TikTak";
//import Figma from "./SmallProjects/figma";
import UsePopCorn from './Movies/usePopcorn'
//import { FaReact,FaDribbble} from "react-icons/fa";


/*
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast react Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      <ol className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizza={pizza} />;
        })}
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}
      <h2>We are currently open</h2>
    </footer>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>{props.pizza.price}</span>
      </div>
      <img src={props.pizza.photoName} alt="pizza pic"></img>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
/*
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function App(){
  return <div className="container">
     <Header/>
     <Menu/>
     <Footer/>
  </div>
}


function Header(){
  return<h1>
    Fast React Pizza Co. 
  </h1>
}
function Menu(){
return<div className="menu" >
  <h2>our Menu</h2>
  <Pizza />
  <Pizza />
  <Pizza />
  <Pizza />
</div>
}
function Footer(){
  const TimeNow = new Date();
  const openHours = 8;
  const closeHours = 19;
  const isOpen = TimeNow >=openHours && TimeNow<=closeHours;
//console.log(isOpen);
//console.log(TimeNow);
return <footer>{isOpen? (<p>we're currently open</p>):(<p>visit us between {openHours}:00 to {closeHours}:00</p>)}</footer>
}

function Pizza(){
  return<>
  <div className="pizza">
  <img src="./pizzas/focaccia.jpg" alt="abc" />
   <div><h3>Pizza Funghi</h3>
   <p>Tomato, mozarella, mushrooms, and onion</p>
   <span>10</span>
   </div> 
  </div>
  </>
}

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <App/>
 );
 */
/* //////////////Profile Card ///////////////////////////////////////////////////
 function App(){
  return <div style={{border: '1px solid black', height:'400px',width:'300px'}}>
             <ProfileCard/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/
///////////// Step component ///////////////////////////
/*function App(){
  return <div >
            <StepComp/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/
/** 
function App(){
  return <div >
            <DateCounter/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/
/*
function App(){
  return <div >
            <FlashCards/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/
/* 
function App(){
  return <div >
            <Budgety/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/

function App(){
  return <div >
            <UsePopCorn/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);

/*function App(){
  return <div >
            <StarRating MaxRating={6}
             messages = {['terrible','bad','good','verygood','briliant']}
             color = '#d8a90f'/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/
/*
function App(){
  return <div >
    <TabComp/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/
/*
function App(){
  return <div >
    <TikTak/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/
/* 
function App(){
  return <div >
    <Figma/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);

*/
/** 
function App(){
  return <div >
    <UsePopCorn/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
*/







