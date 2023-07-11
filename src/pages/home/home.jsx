import stylesH from './home.module.css'
import imgPagInicial from '../../assets/undraw_feeling_proud_qne1.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
       <>
        <div className={stylesH.olaSou}>

            <div className={stylesH.olaSouCss}> <p>Olá, Sou</p> </div>

            <div className={stylesH.nomeCss}> <p>Olavo Vales </p> </div>

            <div className={stylesH.devCss}> <p>Desenvolvedor Full-Stack</p> </div>

            <Link to="/sobre" className={stylesH.buttonCss}>Saiba mais sobre mim</Link>  //tag link substituiu o button

            <img src={imgPagInicial} className={stylesH.imgPagInicial} alt="Imagem pagina inicial" /> 

        </div>  
        </> 
    )
}

export default Home
