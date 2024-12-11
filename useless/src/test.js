
/*import React from 'react';
import Login from './login';
import Chef from './Chef/Chef';
import Count from "./Count/Count";
import Profile from "./profile/Profile";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {
        /*<Login/>
       
        <Chef/>

        <Count/>
       
        
        <Profile/>
        }
    </div>
  );
}

export default App;
import React,{useState} from "react";
import "./Count.css";

const Count=()=>{
    const [count,setCount]=useState(0);
    const decrement=()=>setCount((count)=>count-1);
    const increment=()=>setCount((count)=>count+1);
    return(
        <div className="count">
            <button  onClick={decrement}>-</button>
            <div>{count}</div>
            <button onClick={increment}>+</button>
        </div>
    );
}
export default Count;
import React,{useState} from "react";
import "./Chef.css";
 const Chef=()=>{
    const[inputValue,setinputValue]=useState("");
    const[list,setlist]=useState([]);
    
    const handleSearch=(event)=>{
        event.preventDefault();
        console.log("handlesearch");

        if(inputValue.trim()){
            setlist((preList)=>[...preList,inputValue]);
        }
        setinputValue("");
        console.log(list);
    }
    return(
    <div className="Chef">
        <div className="navbar">
            <img className="logo" alt="Chef logo" src="https://w7.pngwing.com/pngs/664/579/png-transparent-chef-holding-tray-with-food-illustration-chef-restaurant-menu-waiter-beauty-chef-food-hand-logo-thumbnail.png"/>
            <h1>Chef Cloude</h1>
        </div>
        <form className="inputButton" onSubmit={handleSearch}>
            <input 
            placeholder="eg:orange" 
            type="text" 
            className="ingredient"
            value={inputValue}
            onChange={(e)=>setinputValue(e.target.value)}
            required
            />
            <button type="submit" >+Add ingredient</button>
        </form>
        <h2>Ingredients:</h2>
        <ul>
            {list.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>

    </div>);
 }
 export default Chef;
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    star: true, 
  });

  const handleStar = (event) => {
    event.preventDefault();
    setInfo((prevInfo) => ({
      ...prevInfo,
      star: !prevInfo.star, 
    }));
  };

  const { name, email, phone, star } = info;

  return (
    <form className="profile">
      <img
        alt="profile img"
        src="https://via.placeholder.com/150"
        className="profile-img"
      />
      <button className="star" onClick={handleStar}>
        {star ? "★" : "☆"}
      </button>
      <h3>{name}</h3>
      <div className="phone">{phone}</div>
      <div>{email}</div>
    </form>
  );
};

export default Profile;
import React, { useState } from "react";
import './login.css';  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function  handleSubmit(event){
    event.preventDefault();
    // Handle form submission, such as sending the login request to an API.
    console.log("Login submitted with", { email, password });
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

*/