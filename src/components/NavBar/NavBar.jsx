import Logo from '../img/Logo.png'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {

    return (
        <div id="navBar">

            <Link to="/">
            <img id="Logo" src={Logo} alt="Logo" />
            </Link>
            <h3 id='tituloNav'>My Store</h3>
            <nav>
                <ul id='navMenu'>
                    <li className="menuItem">Categorías
                        <ul className='submenu'>
                            <li><Link to="/category/Aperitivos">Aperitivos</Link></li>
                            <li><Link to="/category/Cervezas">Cervezas</Link></li>
                            <li><Link to="/category/Espumantes">Espumantes</Link></li>
                            <li><Link to="/category/Vinos">Vinos</Link></li>
                        </ul>
                    </li>
                
                    <li className="menuItem">Contácto</li>
                        <CartWidget />
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
