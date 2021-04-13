import React from "react";
import Link from "next/link";
import styles from "../../styles/Carousel.module.css";

//components
import Button from "../Button";
import Title from "../Title";

export default function Carousel() {
  const scroll = () => {
    window.scrollBy(0, 750);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.hero__card}>
          <h1 className={styles.card__title}>Finnum þinn!</h1>

          <p className={styles.card__subtitle}>
            Við finnum draumabílinn eftir <strong>þínum</strong> leitarskilyrðum
            og á <strong>þínu</strong> verði
          </p>

          <Button text="BÍLALEIT" href="bilaleit" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            scroll();
          }}
          className={styles.bottom__container}
        >
          <h1 className={styles.bottom__title}>TAKTU SKREF Í RÉTTA ÁTT</h1>
          <img src="arrow_down.png" alt="" />
        </div>
      </div>
    </div>
  );
}
