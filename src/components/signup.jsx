import React, { useState } from "react";
import "./style/signin.css";

export default function SignUp() {
  const [User, setUser] = useState({name: "", mail: "", phone: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  return (
    <div className="login-form">
      <div className="title">Sign Up</div>
      <form>
        <p className="name">Name:</p>
        <input name="name" type="text" value={User.name} onChange={handleChange}/>


        <p className="mail">Mail:</p>
        <input name="mail" type="email" value={User.mail} onChange={handleChange}/>


        <p className="phone">Tel:</p>
        <input name="phone" type="tel" placeholder="+34" value={User.phone} onChange={handleChange}/>

        <button>SIGN UP</button>
      </form>
    </div>
  );
}
