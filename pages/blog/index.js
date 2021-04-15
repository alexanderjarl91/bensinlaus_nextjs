import React from "react";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import BlogCard from "../../components/blog/BlogCard";
import Link from "next/link";
import styles from "../../styles/BlogPage.module.css";

//initiating contentful client
let client = require("contentful").createClient({
  space: "0utqxha8wan1",
  accessToken: "FE8vI302E7oM9cZmdspHs3dHVV4VdbbBPzEjtMzkF6E",
});

//fetching
export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "article",
  });
  return {
    props: { data },
  };
}

export default function index({ data }) {
  const blogs = data.items;
  console.log(blogs);
  return (
    <div>
      <Navbar />
      <Title text="BLOG" />

      <div className={styles.blogs__container}>
        {blogs.map((blog) => (
          <li
            style={{ backgroundColor: "white" }}
            key={blog.sys.id}
            className={styles.blog__item}
          >
            <BlogCard
              href={blog.sys.id}
              headline={blog.fields.headline}
              author={blog.fields.author}
              image={blog.fields.image.fields.file.url}
            />
          </li>
        ))}
      </div>
    </div>
  );
}
