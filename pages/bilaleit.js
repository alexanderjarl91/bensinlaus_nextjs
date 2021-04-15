import React from "react";
import styles from "../styles/Bilaleit.module.css"

//importing components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import Title from "../components/Title"
import Button from "../components/Button"

export default function bilaleit() {
  return (
    <div>
      <Navbar />
      <Title text="BÍLALEITIN"/>
      <p className={styles.subtitle}>Aukið úrval og betri verð frá erlendum bílaumboðum</p>
      <div className={styles.content}>
        <div className={styles.leftBox}>
          <h1 className={styles.cardTitle}>Hvað er bílaleitin?</h1>
          <p>Við hjá Bensínlaus erum sérfræðingar í erlendum bílamarkaði. Í bílaleitinni hjá okkur skilgreinir þú þinn draumabíl á þínu verði og við finnum hann og komum honum til þín. </p>
          <p>Við miðum við að spara þér hálfa milljón í það allra minnsta og sjáum um innflutning og öll önnur smáatriði er varða kaupin. Við getum meira að segja komið þínu gamla í sölu!</p>
          <Button text="Nánar um ferlið"  href="/ferlid"/>
        </div>
          <LeadForm />
      </div>
      <Footer />
    </div>
  );
}
