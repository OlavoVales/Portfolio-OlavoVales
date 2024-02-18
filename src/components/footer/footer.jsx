import stylesF from './footer.module.css'  // dar nome ao import pois se pode importar mais de um css para ser usado no mesmo arquivo

function Footer() {
    return (
      <>
        <footer className={stylesF.rodapeCss}>
          <a>Olavo Vales © 2024</a>
        </footer>
      </>
    )   
}

export default Footer

