import desrossa from '../Images/desrossa.png'
import Nav from "./Nav";

function Desrossa() {
    return (
        <>
        <Nav/>
        <div id ='fundo'>
        <div id='conteudo'>
            <div id='texto '>
            <p>
            Em Dressrosa, um dos maiores arcos da história de One Piece, os Piratas do Chapéu de Palha chegam a uma ilha governada pelo tirano Donquixote Doflamingo.
             Luffy e seus companheiros enfrentam desafios perigosos, lutam contra poderosos adversários e desvendam segredos obscuros para salvar um aliado e acabar com o império criminoso 
             de Doflamingo. O arco de Dressrosa é repleto de reviravoltas emocionantes, batalhas épicas e revelações impactantes que moldam o rumo da história.
            </p>
            </div>
            <img src={desrossa} alt="desrossa" style={{ width: '100%', height: '400px' }} />
            <h1>DESROSSA</h1>
        </div>
           
        </div>
        </>
    )
}

export default Desrossa;