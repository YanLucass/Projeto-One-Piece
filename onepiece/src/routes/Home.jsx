import React from 'react';
import styles from '../Styles/Home-module.css';
import Nav from './Nav';
import luffyhomee from '../Images/luffyhomee.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fundoH">
      <Nav />

      <main>
        <article>
          <h1>PERSONAGENS EM DESTAQUE</h1>
          <div className="centralizaR">
            <div className="retangulo retangulo1"></div>
            <div className="retangulo retangulo2"></div>
            <div className="retangulo retangulo3"></div>
            <div className="centralizaR">
              <Link to="/luffy">Luffy</Link>
              <Link to="/zoro">Zoro</Link>
              <Link to="/sanji">Sanji</Link>
            </div>
          </div>
          <h1>SAIBA MAIS SOBRE OS ARCOS DE ONE PIECE!</h1>
          <div className="centralizaR">
            <div className="retangulo retangulo4"></div>
            <div className="retangulo retangulo5"></div>
            <div className="retangulo retangulo6"></div>
            <Link to="/desrossa">Wano</Link>
            <Link to="/personagens/luffy">Desrossa</Link>
            <Link to="/personagens/luffy">MarineFord</Link>
          </div>
        </article>
      </main>
      <div>
        <img src={luffyhomee} alt="luffy segurando o chapeu e rindo" className="luffyhome" />
      </div>
    </div>
  );
};

export default Home;
