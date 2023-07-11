import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Olavo Vales</span>
            </Link>
            <nav>
                <Link to="/home"><a>Home</a></Link>
                <Link to="/sobre"><a>Sobre</a></Link>
                <Link to="/projetos"><a>Projetos</a></Link>
                <Link to="/contatos"><a>Contatos</a></Link>
            </nav>
        </header>
    )    
}

export default Header