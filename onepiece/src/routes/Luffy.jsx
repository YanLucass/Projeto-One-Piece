import React from "react";
import styles from '../Styles/Historias-module.css';
import Luffy_Conteudo from "../Images/Luffy_Conteudo.png";
import Nav from "./Nav";

function Pagina_Personagem() {
  return (
    <>
      <div id='fundo'>
        <Nav/>
        <div id='conteudo'>
          <div id='texto'>
            <p>Luffy é o protagonista de One Piece, um jovem pirata determinado a se tornar o Rei dos Piratas. Ele possui habilidades elásticas devido à Gomu Gomu no Mi, uma fruta que o transforma em um homem de borracha. Com sua tripulação, os Chapéus de Palha, ele enfrenta perigos, luta contra inimigos poderosos e busca aventuras em busca do lendário tesouro conhecido como One Piece. Luffy é corajoso, leal aos amigos e está sempre disposto a desafiar a injustiça. Sua jornada é marcada por combates emocionantes, momentos engraçados e a busca por seu sonho de se tornar o Rei dos Piratas.</p>
            <p id="recompensa">RECOMPENSA ATUAL: 3 bilhões berries</p>
          </div>
          <img src={Luffy_Conteudo} alt="conteudo" id="imagem" luffy />
          <p id="nome">LUFFY</p>
        </div>
      </div>
    </>
  )
}

export default Pagina_Personagem;
