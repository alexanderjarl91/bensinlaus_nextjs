import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
export default function Footer() {
    
    return (
        <div className={styles.container}>
            <div className={styles.footer__body}>
            {/* LINKS */}
            <div className={styles.hlekkir__container}>
                <h1 className={styles.title}>Hlekkir</h1>
                <div className={styles.footer__links}>
                    <a href="/">Forsíða</a>
                    <a href="/bilar">Grænir bílar</a>
                    <a href="/bilaleit">Bílaleitin</a>
                    <a href="/ferlid">Ferlið</a>
                    <a href="/blog">Blog</a>
                    <a href="/skilmalar">Skilmálar</a>
                    <a href="/personuvernd">Persónuverndarstefna</a>
                    <a href="/vafrakokur">Vafarakökustefna</a>
                </div>
            </div>


            {/* POSTLIST */}
            <div>
                <h1 className={styles.title}>Póstlisti</h1>
                <p className={styles.postlist__subtitle}>Ekki missa af bestu tilboðunum..</p>
                <div className={styles.postlist__container}>
                    <input className={styles.input__style} type="text" placeholder="Fullt nafn"/>
                    <input className={styles.input__style} type="text" placeholder="Netfang"/>
                    <div className={styles.checkbox__container}>
                        <input className={styles.checkbox__style} type="checkbox"/>
                        <p className={styles.checkbox__text}>Já, ég samþykki Persónuverndarstefnu og söluskilmála Bensínlaus</p>
                    </div>
                    <button className={styles.moreBtn}>SKRÁ MIG</button>
                </div>
            </div>
            {/* CONTACT FORM */}
            <div>
            <h1 className={styles.title}>Hafa samband</h1>
            <div className={styles.contact__list}>
                <div className={styles.contact__item}>
                    <MdWebAsset className={styles.icon}/>
                    <p>bensinlaus.is</p>
                </div>
                <div className={styles.contact__item}>
                    <AiOutlinePhone className={styles.icon}/>
                    <a className={styles.contact__link} href="tel:+3545554005">(+354) 555-4005</a>
                </div>
                <div className={styles.contact__item}>
                    <AiOutlineMail className={styles.icon}/>
                    <a className={styles.contact__link} href="mailto:bensinlaus@bensinlaus.is">bensinlaus@bensinlaus.is</a>
                </div>
                </div>
            </div>

            </div>
            {/* COPYRIGHT */}
            <div className={styles.copyright__container}>
                <p>Bensínlaus - Rafbílar</p>
                <p>2020 Bensínlaus ehf. Allur réttur áskilinn</p>
                <p>Laugavegur 178, 105 Reykjavík</p>
            </div>
        </div>
    )
}
