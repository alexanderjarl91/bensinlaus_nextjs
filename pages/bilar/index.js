import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Bilar.module.css";
import Tabletop from "tabletop";
import { GoSettings } from "react-icons/Go";

//importing components
import Navbar from "../../components/Navbar";
import CarFilter from "../../components/CarFilter";
import Footer from "../../components/Footer";
import Car from "../../components/Car";

export default function bilar({ serverData }) {
  const [showFilter, setShowFilter] = useState(false);
  const [numberOfPosts, setNumberOfPosts] = useState(2);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={styles.container}>
      <div className={styles.stickyFooter}>
        {/* MOBILE FILTER BUTTON/FILTER COMPONENT */}
        <div>
          {showFilter ? (
            <CarFilter setShowFilter={setShowFilter} />
          ) : (
            <button
              className={styles.filterBtn}
              onClick={() => {
                toggleFilter();
              }}
            >
              <GoSettings style={{ marginRight: "6px" }} />
              FILTER
            </button>
          )}
        </div>
      </div>

      <Navbar />
      <div className={styles.bilar__content}>
        {/* DESKTOP FILTER */}
        <div className={styles.desktopFilter}>
          <CarFilter />
        </div>

        {/* leftside container */}
        <div className={styles.left__container}>
          <div className={styles.text__container}>
            <h1
              onClick={() => {
                console.log(serverData);
              }}
              className={styles.title}
            >
              BÍLAR Í BOÐI
            </h1>
            <p className={styles.bilar__subtitle}>
              Hér er að finna spennandi bíla sem við getum útvegað
            </p>
          </div>

          {/* MAPPING FROM CAR */}
          <div className={styles.cars__container}>
            {serverData ? (
              <>
                {serverData.slice(0, numberOfPosts).map((car) => (
                  <Car
                    key={car.Tilboðnr}
                    price={car.Verð}
                    manufacturer={car.Framleiðandi}
                    title={car.type}
                    year={car.Year}
                    type={"Plug-in Hybrid"}
                    kms={car.Akstur}
                    href={`/bilar/${car.Tilboðnr}`}
                  />
                ))}
              </>
            ) : (
              <>
                <h1 style={{ color: "green" }}>Leita að bílum..</h1>
                <img style={{ width: "250px" }} src="/loading.gif" alt="" />
              </>
            )}

            {/* if theres data and serverdata length is greater than or equal to number of posts being shown */}
            {serverData && serverData.length >= numberOfPosts ? (
              <button
                className={styles.banner__button}
                onClick={() => {
                  setNumberOfPosts(numberOfPosts + 3);
                }}
              >
                SJÁ FLEIRI
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.bottom__banner}>
        <h1 className={styles.banner__title}>FANNSTU EKKI DRAUMABÍLINN?</h1>
        <p className={styles.banner__subtitle}>
          Við getum fundið hann fyrir þig!
        </p>
        <Link href="/bilaleit">
          <button className={styles.banner__button}>BÍLALEITIN</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const serverData = await Tabletop.init({
    key: process.env.SHEETS_LINK,
  }).then((docs) => docs["Dealer Portal LIVE"].elements);

  return {
    props: { serverData },
    revalidate: 1800,
  };
}
