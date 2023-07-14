import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
                <span>Olavo Vales</span>
            <nav>
                <Link to="/"><a>Home</a></Link>
                <Link to="/sobre"><a>Sobre</a></Link>
                <Link to="/projetos"><a>Projetos</a></Link>
                <Link to="/contatos"><a>Contatos</a></Link>
            </nav>
        </header>
    )    
}

export default Header