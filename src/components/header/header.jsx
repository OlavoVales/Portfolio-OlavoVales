import { Link } from 'react-router-dom'
import stylesH from './header.css'  // dar nome ao import pois se pode importar mais de um css para ser usado no mesmo arquivo
import logoSiteBranca from '../../assets/logoPortfolioSiteWhiteSemBorda.png'

function Header() {
    return (
      <>
  
        <div className={stylesH.header}>
  
          <div className="limitadorHeader">
  
            <ul className="categorias">
              
              <Link to="/home"><p><li>Home</li></p></Link>

              <Link to="/projetos"><p><li>Projetos</li></p></Link>

              <Link to="/sobre"><p><li>Sobre</li></p></Link>

              <Link to="/contatos"><p><li>Contatos</li></p></Link>
  
            </ul>
  
            <Link to="/"><div className="logo">
  
              <img src={logoSiteBranca} className="imgLogo"></img><a href="index.html">LN</a>
                
            </div></Link>
  
          </div>
  
        </div>
     </>
  )
}

export default Header