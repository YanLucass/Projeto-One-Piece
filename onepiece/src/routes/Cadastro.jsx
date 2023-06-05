import React, { useState } from "react";
import styles from '../Styles/Login-module.css';
import { Link } from "react-router-dom";
import luffycadastro from "../Images/luffycadastro.png"

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleConfirmarSenhaChange = (event) => {
    setConfirmarSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Aqui você pode fazer a requisição POST para enviar os dados ao backend
    const data = {
      nome,
      email,
      senha,
      confirmarSenha
    };

    console.log("Dados enviados:", data);
  };

  return (
    <div className="fundo">
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
          />
        </div>
        <div>
          <label htmlFor="confirmarSenha">Confirmação de Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={handleConfirmarSenhaChange}
          />
        </div>
        <button>Enviar</button>
        <Link to="/login">Voltar para Login</Link>
      </form>
      <div>
        <img src={luffycadastro} alt="luffyDesrossa" className="fotocadastro" />
      </div>
    </div>
  );
}

export default Cadastro;
