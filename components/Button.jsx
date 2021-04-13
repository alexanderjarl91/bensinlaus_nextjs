import React from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css"

export default function Button({href, text}) {
  return <Link href={href}>
      <button className={styles.button__style} >{text}</button>
  </Link>;
}
