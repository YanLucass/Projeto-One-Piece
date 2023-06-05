import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Nav-module.css';
import fotouser from '../Images/fotouser.jpg';

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/Personagens" className={styles.link}>Personagens</Link></li>
            <li><Link to="/Arcos" className={styles.link}>Arcos</Link></li>
          </ul>
          <div className="userInfo">
            <Link to="/perfil" className="userName">Flavinho do Pneu</Link>
            <Link to="/perfil"><img src={fotouser} alt="Foto do Usuário" className="scar" /></Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
