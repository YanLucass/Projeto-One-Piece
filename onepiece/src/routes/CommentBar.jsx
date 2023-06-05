import React, { useState } from 'react';
import styles from '../styles/CommentBarCss.css';
import submit from '../images/submit.png';
import perfil from '../images/perfil.png';
import deleteIcon from '../images/apagar.png';

function CommentBar({ addComment }) {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(comment);
    setComment('');
  };

  const handleImageClick = () => {
    if (comment.trim() !== '') {
      setCommentsList((prevComments) => [...prevComments, comment]);
      setComment('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleDeleteComment = (index) => {
    setCommentsList((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div id='comentario'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            onKeyPress={handleKeyPress}
            placeholder="Dê sua opinião ao arco!"
            id='caixa'
          />
          <img
            src={submit}
            alt="Enviar"
            onClick={handleImageClick}
            id='imagem'
          />
        </form>
      </div>
      {commentsList.length > 0 && (
        <div className='saida'>
          <ol>
            {commentsList.map((commentItem, index) => (
              <li key={index} className='comentario-item'>
                <img src={perfil} className='perfil' alt="Perfil" />
                <span>{commentItem}</span>
                <img
                  src={deleteIcon}
                  alt="Apagar"
                  onClick={() => handleDeleteComment(index)}
                  className='apagar'
                />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default CommentBar;