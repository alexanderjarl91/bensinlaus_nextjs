import React from 'react'
import styles from '../styles/Car.module.css'
import Link from 'next/link'

export default function Car({price, manufacturer, title, year, type, kms, href}) {
    return (
      <Link href={href}>
        <div className={styles.car__card}>
                <div className={styles.img__container}>
                  <img
                    className={styles.car__img}
                    src="https://dam.automovilonline.com.mx/wp-content/uploads/2019/09/lamborghinihuracanevo202021.jpg"
                    alt=""
                    />
                </div>
                  <div className={styles.car__banner}>
                    <div className={styles.banner__top}>
                      <p className={styles.card__carYear}>{year}</p>
                      <h2 className={styles.card__carManufacturer}>
                        {manufacturer}
                      </h2>
                      <h2 className={styles.card__carTitle}>
                        {title}
                      </h2>
                     
                    </div>
                    <p className={styles.card__Price}>{price}</p>
                    <div className={styles.card__Footer}>
                      <p>Ekinn {kms} km</p>
                      <p>{type}</p>
                    </div>
                  </div>
                </div>
              </Link>
    )
}
