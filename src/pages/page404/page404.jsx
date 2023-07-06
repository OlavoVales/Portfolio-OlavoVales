import stylesP4 from './Page404.css'

function Page404() {
    return (
        <>
                <h2 className={stylesP4.titulo2}>Algo de errado não está certo!</h2>
                <div className={stylesP4.textos}>
                    <span className={stylesP4.texto_grande}>404</span> <br />
                    <strong className={stylesP4.texto_vermelho}>Página Não Localizada!</strong>
                </div>
        </>
    )
}

export default Page404