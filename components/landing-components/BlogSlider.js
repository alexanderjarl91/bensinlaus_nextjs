import React from "react";
import styles from "../../styles/BlogSlider.module.css";
import Link from "next/link";
import Button from "../Button";
import Title from "../Title";

export default function BlogSlider() {
  const blogs = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Lamborghini_Huracan_Evo_Genf_2019_1Y7A5452.jpg",
      title: "Nýr Lamborghini rafmagnsbíll gerir allt vitlaust",
      date: "8. apríl, 2021",
      author: "Ívar Máni",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Lamborghini_Huracan_Evo_Genf_2019_1Y7A5452.jpg",
      title: "Nýr Lamborghini rafmagnsbíll gerir allt vitlaust",
      date: "8. apríl, 2021",
      author: "Ívar Máni",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Lamborghini_Huracan_Evo_Genf_2019_1Y7A5452.jpg",
      title: "Nýr Lamborghini rafmagnsbíll gerir allt vitlaust",
      date: "8. apríl, 2021",
      author: "Ívar Máni",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Lamborghini_Huracan_Evo_Genf_2019_1Y7A5452.jpg",
      title: "Nýr Lamborghini rafmagnsbíll gerir allt vitlaust",
      date: "8. apríl, 2021",
      author: "Ívar Máni",
    },
  ];

  return (
    <div className={styles.container}>
      <Title text="BLOG" color="var(--Main-color)" />

      <div className={styles.blogs__container}>
        {blogs.map((blog) => (
          <div key={blog.postTitle} className={styles.post}>
            <img className={styles.postImg} src={blog.imageUrl} alt="" />
            <h2 className={styles.postTitle}>{blog.title}</h2>
            <div className={styles.postBottom}>
              <p>{blog.date}</p>
              <p>{blog.author}</p>
            </div>
          </div>
        ))}
      </div>

      <Button href="/blog" text="ELDRI FÆRSLUR" />
    </div>
  );
}
