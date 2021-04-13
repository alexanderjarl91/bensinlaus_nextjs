import React from "react";
import styles from "../../styles/Ferlid.module.css";

//COMPONENTS
import Title from "../Title";
import Button from "../Button";
import { MdWebAsset } from "react-icons/md";
import { RiShip2Line } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { BiPurchaseTagAlt, BiSearchAlt } from "react-icons/bi";

export default function Ferlid() {
  return (
    <div className={styles.container}>
      <Title text="FERLIÐ" color="white" />
      <p style={{ marginTop: "-40px" }}>
        Kaupferlið er í raun og veru mjög einfalt, við byrjum á að..
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <BiSearchAlt className={styles.icon} />
          <h1>FINNA</h1>
          <p>
            Þú ákveður þín leitarskilyrði, þ.e. týpu, hámarksverð, akstur, litur
            og við förum á markaðinn og reynum að útvega þér draumabílinn.
          </p>
        </div>
        <div className={styles.card}>
          <BiPurchaseTagAlt className={styles.icon} />
          <h1>KAUPA</h1>
          <p>
            Þú greiðir 20% inn á bílinn og við festum kaupin fyrir þig og fáum
            söluskoðun.
          </p>
        </div>
        <div className={styles.card}>
          <RiShip2Line className={styles.icon} />
          <h1>SENDA</h1>
          <p>
            Þú slappar af á meðan við sjáum um innflutninginn og öll önnur
            smáatriði varðandi bílinn
          </p>
        </div>
        <div className={styles.card}>
          <FaCarSide className={styles.icon} />
          <h1>SÆKJA</h1>
          <p>
            Þegar bíllinn er kominn til landsins og tollafgreiddur höfum við
            samband og þú sækir nýja bílinn
          </p>
        </div>
      </div>

      <Button href="/ferlid" text="NÁNAR UM FERLIÐ" />
    </div>
  );
}
