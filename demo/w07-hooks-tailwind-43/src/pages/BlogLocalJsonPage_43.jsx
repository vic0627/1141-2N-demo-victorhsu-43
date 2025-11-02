import { useState } from "react";
import Blog_43 from "../components/Blog_43";
import blogData_43 from "../assets/data/blogData.json";

const BlogLocalJsonPage_43 = () => {
  const [name, setName] = useState("VICTOR HSU");
  const [id, setId] = useState(213410243);
  const [blogs_43, setBlogs_43] = useState(blogData_43);
  return (
    <>
      <section className="blogs">
        <div className="section-title">
          <h2>
            Blogs From Local Json -- {name}, {id}
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

export default BlogLocalJsonPage_43;
