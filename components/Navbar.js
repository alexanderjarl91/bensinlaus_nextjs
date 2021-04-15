import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { slide as Menu } from "react-burger-menu";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import Image from "next/image";

export default function Navbar({}) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu ? (
        <Menu
          width={"100%"}
          right
          isOpen={showMenu}
          pageWrapId={"page-wrap"}
          outerContainerId={"container"}
        >
          <div className={styles.mobileMenu}>
            <div className={styles.header}>
              <Image src="/bensinlaus.webp" className={styles.logo} />
              <img src="bensinlaus.webp" className={styles.logo} />

              <img
                className={styles.hamburgerClose}
                src="/closeMenu.png"
                alt=""
                onClick={() => {
                  handleShowMenu();
                }}
              />
            </div>
            <div className={styles.mobileMenu__links}>
              <Link href="/">Forsíða</Link>
              <Link href="/bilar">Grænir bílar</Link>
              <Link href="/bilaleit">Bílaleitin</Link>
              <Link href="/ferlid">Ferlið</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div className={styles.mobileMenu__secondaryLinks}>
              <Link href="/">Skilmálar</Link>
              <Link href="/">Persónuverndarstefna</Link>
              <Link href="/">Vafrakökustefna</Link>
            </div>
            <div className={styles.copyright}>
              <p>Bensínlaus - Rafbílar</p>
              <p>2020 Bensínlaus ehf. Allur réttur áskilinn.</p>
              <p>Laugavegur 178, 105 Reykjavík</p>
            </div>
          </div>
        </Menu>
      ) : null}

      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/">
          <img src="bensinlaus.webp" className={styles.logo} />
        </Link>

        {/* HAMBURGER MENU */}

        {/* NAV LINKS */}
        <nav className={styles.navlink__container}>
          <Link href="/">
            <li className={styles.link}>FORSÍÐA</li>
          </Link>
          <Link href="/bilaleit">
            <li className={styles.link}>BÍLALEIT</li>
          </Link>
          <Link href="/bilar">
            <li className={styles.link}>GRÆNIR BÍLAR</li>
          </Link>
          <li className={styles.link}>FERLIÐ</li>
          <Link href="/blog">
            <li className={styles.link}>BLOG</li>
          </Link>

          <li className={`${styles.dropdown} ${styles.link}`}>UM OKKUR</li>
          <Link href="/pontun">
            <li className={styles.link}>HAFA SAMBAND</li>
          </Link>
        </nav>

        {/* NAV FOOTER */}
        <div className={styles.info}>
          <div className={styles.info__item}>
            <MdWebAsset className={styles.icon} />
            <p className={styles.website}>bensinlaus.is</p>
          </div>
          <div className={styles.info__item}>
            <AiOutlinePhone className={styles.icon} />
            <a href="tel:+3545554005">(+354) 555-4005</a>
          </div>
          <div className={styles.info__item}>
            <AiOutlineMail className={styles.icon} />
            <a href="mailto:bensinlaus@bensinlaus.is">
              bensinlaus@bensinlaus.is
            </a>
          </div>
        </div>
        <img
          className={styles.hamburger}
          src="burger.png"
          alt=""
          onClick={() => {
            handleShowMenu();
          }}
        />
      </div>
    </>
  );
}
