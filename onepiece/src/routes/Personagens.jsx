import Nav from './Nav';
import { Link} from 'react-router-dom';
    
function Personagens() {
    return (
        <div>
            <Nav/>
            <main>
                 <article>
                     <h1>PERSONAGENS</h1>
                        <div className="centralizaR">
                        <div className="retangulo retangulo1"></div>
                        <div className="retangulo retangulo2"></div>
                        <div className="retangulo retangulo3"></div>
                        <div className="centralizaR">
                        <Link to="/Luffy">Luffy</Link>
                        <Link to="/Zoro" className="teste">Zoro</Link>
                        <Link to="/personagens/sanji">Sanji</Link>
                        </div>
                </div>
        </article>
    </main>
</div>
    )
}

export default Personagens;