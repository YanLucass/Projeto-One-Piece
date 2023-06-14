import Nav from './Nav';
import { Link} from 'react-router-dom';
import styles from '../Styles/Home-module.css';
function Arcos() {
    return (
        <div>
            <Nav/>
            <main>
                 <article>
                     <h1>BEM VINDO AOS ARCOS DE ONE PIECE</h1>
                        <div className="centralizaR">
                        <div className="retangulo retangulo4"></div>
                        <div className="retangulo retangulo5"></div>
                        <div className="retangulo retangulo6"></div>
                        <div className="centralizaR">
                        <Link to="/Wano">Wano</Link>
                        <Link to="/Desrossa" >Desrossa</Link>
                        <Link to="/MarineFord">MarineFord</Link>
                        </div>
                </div>
        </article>
    </main>
</div>
    )
}

export default Arcos;