import React from "react";
import styles from "../styles/Header.module.css";

export default function Header({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
