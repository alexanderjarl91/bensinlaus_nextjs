import React, { useState, useEffect } from "react";

export const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState();

  //initiating contentful client
  let client = require("contentful").createClient({
    space: "0utqxha8wan1",
    accessToken: "FE8vI302E7oM9cZmdspHs3dHVV4VdbbBPzEjtMzkF6E",
  });

  useEffect(() => {
    const getBlogs = async () => {
      let res = await client.getEntries({
        content_type: "article",
      });

      setBlogs(res);
    };
    getBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};
