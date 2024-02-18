import styles from './card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython } from 'react-icons/fa'
import { BiLogoTypescript } from "react-icons/bi";

import { BsArrowRight } from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <BiLogoTypescript />
                    <FaReact />
                    <FaPhp />
                    <FaPython />
                </div>
                <a  href={html_url}
                    className={styles.botao}
                    target="_blank"
                    rel="noopener noreferrer">
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Card