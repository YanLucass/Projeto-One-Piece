import React from "react";
import styles from "../Styles/Historias-module.css";
import Sanji_Conteudo from "../Images/Sanji_Conteudo.png";
import Nav from "./Nav";

function Sanji() {
  return (
    <>
      <div id='fundo'>
        <Nav/>
        <div id='conteudo'>
          <div id='texto'>
            <p>Sanji, também conhecido como "Black Leg" Sanji, é um personagem cativante do anime e mangá "One Piece". Ele é membro dos Piratas do Chapéu de Palha, liderados por Monkey D. Luffy. Sanji é um talentoso cozinheiro e um exímio lutador. Ele é conhecido por seu charme com as mulheres, seu estilo cavalheiresco e seu péssimo relacionamento com a sua família. Sanji possui uma perna esquerda extremamente poderosa, que ele utiliza em combate, sendo habilidoso em técnicas de chutes. Ao longo da história, Sanji enfrenta diversos desafios e inimigos, sempre demonstrando sua lealdade aos seus amigos e sua dedicação à culinária. Com sua personalidade única, habilidades de luta impressionantes e um senso de humor peculiar, Sanji se torna um personagem amado pelos fãs de "One Piece".</p>
            <p id="recompensa">RECOMPENSA ATUAL: 330 milhões de berries</p>
          </div>
          <img src={Sanji_Conteudo} alt="conteudo" id="imagem" luffy />
          <p id="nome">SANJI</p>
        </div>
      </div>
    </>
  )
}

export default Sanji();