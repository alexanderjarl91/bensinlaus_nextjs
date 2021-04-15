import React from 'react'
import Title from '../Title'
import styles from '../../styles/Bilaleitin.module.css'

export default function Bilaleitin() {
    return (
        <div className={styles.container}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img className={styles.icon}src="/bilaleit_icon.png" alt=""/>
            <Title className={styles.title}text="BÍLALEITIN" />
            </div>
            <p className={styles.text}>Okkar helsta þjónusta er <i>Bílaleitin</i>. Við hjá Bensínalus erum sérfræðingar í erlendum bílamarköðum og höfum byggt upp mjög góð tengsl við umboð og sölur bæði í Evrópu og Norður-Ameríku. Við erum helst að flytja inn bíla frá Þýskalandi, Svíþjóð og Bandaríkjunum.</p>
        </div>
    )
}
