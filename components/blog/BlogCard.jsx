import React from 'react'
import styles from '../../styles/BlogCard.module.css'
import Link from "next/link";

export default function BlogCard({headline, author, image, href}) {
    return (
        <Link href={`blog/${href}`}>
            <div className={styles.container}>
                <div>
                <div className={styles.imgContainer}>
                    <img className={styles.blogImg}src={image} alt=""/>
                </div>
                <h3 className={styles.blogTitle}>{headline}</h3>
                </div>
                <div className={styles.bottom}>
                    <p>{author}</p>
                    <p>Date</p>
                </div>
            </div>
        </Link>
    )
}
