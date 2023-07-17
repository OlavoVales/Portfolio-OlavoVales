import stylesH from './home.module.css'
import imgPagInicial from '../../assets/undraw_feeling_proud_qne1.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
       <>
            <section className={stylesH.home}>
                <div className={stylesH.apresentacao}>
                    <p>
                        Olá, sou <br />
                        <span>Olavo Vales</span> <br />
                        Dev Full Stack Júnior
                    </p>
                    <Link to="/sobre" className={`${stylesH.btn}`}>
                        Saiba mais sobre mim
                    </Link>
                </div>
                <figure>
                    <img src={imgPagInicial} className={stylesH.img_home} alt="Imagem de Home" />
                </figure>
            </section>
        </> 
    )
}   

export default Home
