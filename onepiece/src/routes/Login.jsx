import React, { useState } from "react";
import styles from '../Styles/Login-module.css';
import { Link } from "react-router-dom";
import luffylogin from '../Images/luffylogin.png';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className= "fundo">
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button>Enviar</button>
        <Link to="/cadastro">Fazer Cadastro!</Link>
      </form>
      <div>
        <img src={luffylogin} alt="luffy" className="fotolc" />
      </div>
    </div>
  );
}

export default Login;
