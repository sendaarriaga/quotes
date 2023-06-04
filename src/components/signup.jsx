import React, { useState } from "react";
import "./style/signup.css";

export default function SignUp() {
  const [User, setUser] = useState({
    name: "",
    mail: "",
    phone: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  return (
    <form>
      <p className="name">Nombre completo</p>
      <input
        name="name"
        type="text"
        value={User.name}
        onChange={handleChange}
      />

      <p className="mail">Correo electrónico</p>
      <input
        name="mail"
        type="email"
        value={User.mail}
        onChange={handleChange}
      />

      <p className="phone">Teléfono móvil</p>
      <input
        name="phone"
        type="tel"
        placeholder="+34"
        value={User.phone}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}
