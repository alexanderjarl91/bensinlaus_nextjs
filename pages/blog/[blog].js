import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogContext } from "../../context"
import styles from "../../styles/Blog.module.css"


export default function blog() {
    const {blogs} = useContext(BlogContext)
    const [blog, setBlog] = useState()
    const router = useRouter();
    const blogId = router.query.blog;


  useEffect(() => {
      if (blogs) {
          console.log('blogs :>> ', blogs);
          const foundBlog = blogs.items.find((item) => item.sys.id === blogId )
          console.log('foundBlog :>> ', foundBlog);
          setBlog(foundBlog)
          console.log('blog :>> ', blog);
      }
  }, [blogs])

  useEffect(() => {
      console.log(blog)
  }, [blog])


  return (
    <div>
      <Navbar />
      
      <button onClick={() => {
          router.back()
        }}>BACK</button>

        
        {blog && 
            <div className={styles.blog}>
                <div className={styles.img__container}>
                    <img className={styles.blogImg} src={blog.fields.image.fields.file.url} alt=""/>
                </div>
                <h3 className={styles.title}>{blog.fields.headline}</h3>
                <div>
                    <p>{blog.fields.author}</p>
                    <p>date</p>
                </div>
      {blog ? 
        <div className={styles.content__container}>
            {documentToReactComponents(blog.fields.content)}
        </div>
      : null}
            </div>}
    </div>
  );
}

//initiating contentful client
let client = require("contentful").createClient({
  space: "0utqxha8wan1",
  accessToken: "FE8vI302E7oM9cZmdspHs3dHVV4VdbbBPzEjtMzkF6E",
});
