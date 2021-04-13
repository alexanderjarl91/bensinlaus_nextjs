import React from "react";
import styles from "../../styles/CarSlider.module.css";

//components
import Button from "../Button";
import Car from "./CarLanding";
import Title from "../Title";

export default function CarSlider({ serverData }) {
  return (
    <div className={styles.container}>
      <Title text="NÝIR BÍLAR" color="var(--Main-color)" />
      <div className={styles.cars__container}>
        {serverData ? (
          <>
            {/* mapping through the first 3 items */}
            {serverData.slice(0, 4).map((car) => (
              <Car
                key={car.Tilboðnr}
                price={car.Verð}
                manufacturer={car.Framleiðandi}
                title={car.type}
                year={"year"}
                type={"Plug-in Hybrid"}
                kms={car.Akstur}
                href={`/bilar/${car.Tilboðnr}`}
              />
            ))}
          </>
        ) : (
          <img style={{ width: "250px" }} src="/loading.gif" alt="" />
        )}
      </div>
      <Button href="bilar" text="FLEIRI BÍLAR" />
    </div>
  );
}
