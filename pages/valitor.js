import React, { useEffect, useState } from "react";
import styles from "../styles/Pontun.module.css";
import { slide as Menu } from "react-burger-menu";

//importing components
import Navbar from "../components/Navbar";
import LeadForm from "../components/LeadForm";

export default function valitor() {
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    /* Load script */
    const script = document.createElement("script");
    script.src = "https://checkout.uat.valitor.is/checkout.js";

    /* Add attributes */
    script.onload = () => {
      window.valitor.checkout.init({
        key: "ApiKey.fcVvGwJ2hUC97igual//yXn1w1CwYl1qz5cCKbyXZrM=",
        language: "en",
        merchant: "Valitor Checkout Demo",
        currency: "ISK",
      });
    };
    /* Append script to head of document */
    document.head.append(script);
  }, []);

  const requestData = {
    amount: 5460,
    merchantReferenceId: "48ad79ca-46f2-4e85-a491-024f4100872c",
    digitalSignature:
      "b399fc9fb78013cb3a70d9d5a4602adcc0cac0fd96c0081fdc55a44d1f0b925b7eacc8f4f835941e8d934721423731dc902182f40353dc69e810b65e673cf0ef",
  };

  return (
    <div>
      <Navbar />
      <div className={styles.info__container}>
        <h1 className={styles.title}>Donate</h1>
        <h2>please help a fellow web developer out..</h2>
        
        <div>
          <input style={{backgroundColor: 'white'}} onChange={(e)=>{
            console.log(e.value)
          }}type="number"/>

        </div>
        <p>click the button below to donate</p>

        <img
          onClick={() => {
            window.valitor.checkout.open(requestData);
          }}
          className={styles.valitor__button}
          src="/valitor_btn.png"
          alt=""
        />
      </div>
    </div>
  );
}
