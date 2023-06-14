import React from "react";
import styles from '../Styles/Historias-module.css'
import Zoro_Conteudo from '../Images/Zoro_Conteudo.png';
import Nav from "./Nav";

function Zoro() {
  return (
    <>
      <div id='fundo'>
        <Nav/>
        <div id='conteudo'>
          <div id='texto'>
            <p>Zoro, também conhecido como Roronoa Zoro, é um dos personagens principais do popular anime e mangá "One Piece". Ele é um espadachim habilidoso e membro dos Piratas do Chapéu de Palha, liderados pelo lendário Monkey D. Luffy. Zoro é conhecido por sua personalidade séria e determinada, sempre em busca de se tornar o maior espadachim do mundo. Ele possui uma incrível força física e técnica com a espada, usando seu estilo de luta de três espadas chamado Santoryu. Ao longo da série, Zoro enfrenta inimigos poderosos e se envolve em batalhas épicas, sempre mostrando sua lealdade aos seus companheiros e sua determinação em superar seus limites. Ele se torna uma figura icônica e querida pelos fãs de "One Piece" devido à sua coragem, persistência e busca incessante pela superação.</p>
            <p id="recompensa">RECOMPENSA ATUAL: 320 milhões de berries</p>
          </div>
          <img src={Zoro_Conteudo} alt="conteudo" id="imagem" luffy />
          <p id="nome">ZORO</p>
        </div>
      </div>
    </>
  )
}

export default Zoro;