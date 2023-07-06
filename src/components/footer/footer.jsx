import stylesF from './footer.css'  // dar nome ao import pois se pode importar mais de um css para ser usado no mesmo arquivo

function Footer() {
    return (
      <>
        <div className={stylesF.rodapeCss}><p id="">Olavo Vales © 2023</p></div>
      </>
    )   
}

export default Footer

