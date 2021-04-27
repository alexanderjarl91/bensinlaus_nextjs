import React, { useEffect, useState } from "react";
import styles from "../styles/Pontun.module.css";
import { slide as Menu } from "react-burger-menu";

//importing components
import Navbar from "../components/Navbar";
import LeadForm from "../components/LeadForm";

export default function pontun() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const authenticatePayment = async () => {
    //payload úr spekkum
    const paymentObject = {
      Operation: "Sale",
      TransactionType: "Ecommerce",
      Currency: "ISK",
      Amount: 6700,
      CardNumber: "222300******1824",
      ExpirationMonth: "10",
      ExpirationYear: "2021",
      Cvc: "123",
    };

    //post request
    const response = await fetch(
      "https://uat.valitorpay.com/Payment/CardPayment",
      {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "valitorpay-api-version": "2.0",
          Authorization: process.env.VALITOR_API_KEY,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",

        // payload jsonified and sent as body
        body: JSON.stringify(paymentObject),
      }
    ).then((data) => {
      //log data
      console.log("data:", data);
    });

    return;
  };

  return (
    <div>
      <Navbar />
      <div className={styles.info__container}>
        <h1
          onClick={() => {
            toggleMenu();
          }}
          className={styles.title}
        >
          Pöntun
        </h1>
        <div className={styles.info}>
          <div className={styles.info__box}>
            <h1>Ferlið</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolore vero modi, rem autem natus! Ratione quo voluptas facilis
              inventore delectus perspiciatis tempora, veniam, provident, velit
              natus id non modi.
            </p>
          </div>
          <div className={styles.info__box}>
            <h1>Valitor</h1>
            <p>
              {" "}
              Valitor sér um alla meðhöndlun kortaupplýsinga með Valitor
              Checkout. Valitor dekkar þjónustugjaldið af kreditkorti þínu
              Bensínlaus ehf hefur ekki aðgengi að þínum upplýsingum.
            </p>
          </div>
        </div>
        <img
          onClick={() => {
            authenticatePayment();
          }}
          className={styles.valitor__button}
          src="/valitor_btn.png"
          alt=""
        />
      </div>
    </div>
  );
}
