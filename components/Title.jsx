import React from 'react'
import styles from '../styles/Title.module.css'

export default function Title({text, color}) {
    return (
        <h1 style={{color:`${color}`}}className={styles.title}>{text}</h1>
    )
}
