import React from 'react'
import styles from "../styles/CarFilter.module.css";


export default function CarFilter({setShowFilter}) {
    return (
        <div className={styles.container}>
            <h1 onClick={() => {
                setShowFilter(false)
            }}>FILTER</h1>

            {/* CHECKBOX HAVEN */}
            <div className={styles.filter__container}>
                <div>
                    <h2 className={styles.subtitle}>Framleiðandi</h2>
                    <div className={styles.checkbox__container}>
                        <div><input type="checkbox"/><label htmlFor="">Mercedes Benz</label></div>
                        <div><input type="checkbox"/><label htmlFor="">Audi</label></div>
                        <div><input type="checkbox"/><label htmlFor="">Mitsubishi</label></div>
                        <div><input type="checkbox"/><label htmlFor="">Nissan</label></div>
                        <div><input type="checkbox"/><label htmlFor="">BMW</label></div>
                        <div><input type="checkbox"/><label htmlFor="">Tesla</label></div>
                    </div>
                </div>
                <div>
                    <h2 className={styles.subtitle}>Árgerð</h2>
                    <div className={styles.checkbox__container}>
                        <div><input type="checkbox"/><label htmlFor="">2017</label></div>
                        <div><input type="checkbox"/><label htmlFor="">2018</label></div>
                        <div><input type="checkbox"/><label htmlFor="">2019</label></div>
                        <div><input type="checkbox"/><label htmlFor="">2020</label></div>
                        <div><input type="checkbox"/><label htmlFor="">2021</label></div>
                    </div>
                </div>
            </div>
            <div className={styles.selector__container}>
                <div className={styles.range__container}>
                    <h2 className={styles.subtitle}>Verðflokkur</h2>
                    <select name="price" id="">
                        <option value="">undir 5 milljónum</option>
                        <option value="">5-9 milljónir</option>
                        <option value="">9+ milljónir</option>
                    </select>
                </div>
                <div className={styles.range__container}>
                    <h2 className={styles.subtitle}>Hámarksakstur</h2>
                    <select name="price" id="">
                        <option value="">undir 10.000km</option>
                        <option value="">10.000 - 40.000 km</option>
                        <option value="">40.000+ km</option>
                    </select>
                </div>
            </div>

            <button onClick={() => {
                setShowFilter(false)
            }} className={styles.save__btn}>VISTA</button>
                
        </div>
    )
}
