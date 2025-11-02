import { useState, useEffect } from "react";
import Blog_43 from "../components/Blog_43";

const BlogNodePage_43 = () => {
  const [name, setName] = useState("VICTOR HSU");
  const [id, setId] = useState(213410243);
  const [blogs_43, setBlogs_43] = useState([]);

  const fetchBlogs43 = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blog_43");
      const data = await res.json();
      console.log("blogs", data);
      setBlogs_43(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs43();
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="section-title">
          <h2>
            Blogs From Node -- {name}, {id}
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

export default BlogNodePage_43;
