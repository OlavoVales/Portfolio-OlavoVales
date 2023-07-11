import styles from './sobre.module.css'
import avatar from './imagesSobre/avatar.png'
import html from './imagesSobre/html.svg'
import css from './imagesSobre/css.svg'
import javascript from './imagesSobre/javascript.svg'
import react from './imagesSobre/react.svg'
import swift from './imagesSobre/swift.svg'
import kotlin from './imagesSobre/kotlin.svg'
import typescript from './imagesSobre/typescript.svg'
import php from './imagesSobre/php.svg'
import mysql from './imagesSobre/mysql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Olavo Vales</span> <br />
                    <strong>Desenvolvedor Junior</strong> </p>

                    <p>atualmente realizando ensino médio técnico em Desenvolvimento Web e Mobile pelo Colégio Cotemig, com previsão de formação ao final de 2023.</p>

                    <p>Possuo conhecimento no front e back-end, além de ser uma pessoa muito focada, dedicada e resiliente.</p>

                    <p>Possuo conhecimento no front e back-end, utilizando de React.js, Swift, Kotlin, Typescript, PHP e MySQL, além de ser uma pessoa muito focada, dedicada e resiliente.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={javascript} alt="Ícone do javascript" />
                    <img src={react} alt="Ícone do react" />
                    <img src={swift} alt="Ícone do swift" />
                    <img src={kotlin} alt="Ícone do kotlin" />
                    <img src={typescript} alt="Ícone do typescript" />
                    <img src={php} alt="Ícone do php" />
                    <img src={mysql} alt="Ícone do mysql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre