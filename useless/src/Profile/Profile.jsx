import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ email ,password}) => {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: email,  // Set the email from props
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

  const { name, phone, star } = info;

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
      <div>{email}</div> {/* Display email */}
    </form>
  );
};

export default Profile;
