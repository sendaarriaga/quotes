import React, { useState } from "react";
import "./style/signin.css";

function SignIn() {

  const [messages, setMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "User1",
      password: "123456"
    },
    {
      username: "User2",
      password: "123456"
    }
  ];

  const Search = (event) => {
    event.preventDefault();

    var { ename, epass } = document.forms[0];

    const User = database.find((user) => user.username === ename.value);

    if (User) {
      if (User.password !== epass.value) {
        setMessages({ message: "invalid password", wrong: true });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setMessages({ message: "invalid username", wrong: true });
    }
  };

  const ErrorMessage = (wrong) =>
  wrong === messages.wrong && (
    <div className="error">{messages.message}</div>
  );

  function openprofile () {
    var url='../profile?name='+document.getElementById('ename').value; 
    return url;

  }

  const SignInForm = (

    <form>
        <p>Username </p>
        <input type="text" name="ename" id="ename" required />      
        <p>Password </p>
        <input type="password" name="epass" required />
        {ErrorMessage(true)}
        <button onClick={Search}>SIGN IN</button>
    </form>
  );

  return (
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ?  <div className="succes">User is successfully logged in <div><a href="../"><button>Home</button></a> <a href={openprofile()}><button>Profile</button></a></div></div> : SignInForm}
    </div>
  );
}


export default SignIn;