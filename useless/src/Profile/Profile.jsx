
import React, { useState } from "react";
import "./Profile.css";

const Profile = ({email,password}) => {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: email,
    phone: password,
    star: true, 
  });

  const handleStar = (event) => {
    event.preventDefault();
    setInfo((prevInfo) => ({
      ...prevInfo,
      star: !prevInfo.star, 
    }));
  };

  const { name,  email:e,phone:phone1, star } = info;

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
      <div >{phone1}</div>
      <div>{e}</div>
    </form>
  );
};

export default Profile;