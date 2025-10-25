import { useState, useEffect } from "react";
import Blog_43 from "../components/Blog_43";
import { supabase } from "../db/clientSupabase";

const BlogSupaPage_43 = () => {
  const [name, setName] = useState("VICTOR HSU");
  const [id, setId] = useState(213410243);
  const [blogs_43, setBlogs_43] = useState([]);

  const fetchBlogFromSupaServer = async () => {
    try {
      const { data } = await supabase.from("blog_43").select("*");
      console.log("blogs", data);
      setBlogs_43(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogFromSupaServer();
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="section-title">
          <h2>
            Blogs From Supabase -- {name}, {id}
          </h2>
        </div>
        <div className="blogs-center">
          {blogs_43.map(({ id, title, descrip, category, img }) => (
            <Blog_43
              key={id}
              id={id}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSupaPage_43;
