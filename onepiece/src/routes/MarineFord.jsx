import marineford from '../Images/marineford.png';
import Nav from './Nav';

function MarineFord() {
  return (
    <>
      <Nav />
      <div id="fundo">
        <div id="conteudo">
          <div id="texto">
            <p>
            Marineford é um dos arcos mais intensos e impactantes em One Piece. Neste arco, ocorre uma grande guerra entre a Marinha e os Piratas do Barba Branca, um dos piratas mais
             poderosos do mundo. A batalha acontece na ilha de Marineford, sede da Marinha, com o objetivo de resgatar Ace, o irmão de Luffy, que foi capturado.
              A guerra resulta em uma série de confrontos emocionantes, revelações chocantes e perdas devastadoras, deixando uma marca profunda no mundo de One Piece.
            </p>
          </div>
          <img src={marineford} alt="marine" id="marine" style={{ width: '100%', height: '400px' }} />
          <h1>MARINEFORD</h1>
        </div>
      </div>
    </>
  );
}

export default MarineFord;