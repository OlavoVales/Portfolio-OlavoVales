
import stylesContatos from './contatos.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

function Contatos() {
    return (
        <>
                <section className={stylesContatos.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={stylesContatos.icones}>
                        
                        <a href='mailto:olavovgcs@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <BiLogoGmail className={stylesContatos.icone} />
                        </a>
                        <a href='https://github.com/OlavoVales' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={stylesContatos.icone} />
                        </a>
                        <a href='https://linkedin.com/in/olavo-vales' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={stylesContatos.icone} />
                        </a>
                        <a href='(31) 9 9773-4361' target='_blank' rel='noopener noreferrer'>
                            <BsWhatsapp className={stylesContatos.icone} />
                        </a>
                    </div>

                </section>
        </>
    )
}

export default Contatos