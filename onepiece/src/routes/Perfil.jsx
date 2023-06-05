import React from 'react';
import styles from '../Styles/Perfil-module.css';

const UserProfile = () => {
  return (
    <div className="pagina-branca">
      <div className="header">
        <img src="background-image.jpg" alt="Background" className="background-image" />
        <div className="red-overlay"></div>
        <div className="profile-container">
          <div className="profile-picture"></div>
          <span className="username">Nome do Usuário</span>
        </div>
      </div>
      
      </div>
    
    
  );
};

export default UserProfile;
