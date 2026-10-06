import './Header.css'
import '../../imgs/coffee.png'


function Header() {
    return(
        <header className="header">
            <div className='header-container'>
            <div className="logo">
                <img className="logo-icon" src="../../imgs/coffee.png" alt="Logo" />
                <span className="logo-text">Café lagoa</span>
            </div>
            <nav className="nav">
                <a href="#">Início</a>
                <a href="#">Catálogo</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
            </nav>
            </div>
        </header>
    )
}

export default Header