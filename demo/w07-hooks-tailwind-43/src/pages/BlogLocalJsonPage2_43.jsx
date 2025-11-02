import { useState } from "react";
import Blog2_43 from "../components/Blog2_43";
import blogData_43 from "../assets/data/blogData.json";
import Alert_43 from "../components/Alert_43";

const BlogLocalJsonPage_43 = () => {
  const [name, setName] = useState("VICTOR HSU");
  const [id, setId] = useState(213410243);
  const [blogs_43, setBlogs_43] = useState(blogData_43);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const removeItem = (id) => {
    setBlogs_43(blogs_43.filter((b) => b.id !== id));
  };
  const clearAllBlogs = () => {
    setBlogs_43([]);
  };
  const loadAllBlogs = () => {
    setBlogs_43(blogData_43);
  };
  return (
    <>
      {alert.show && <Alert_43 alert={alert} showAlert={showAlert} />}
      <section className="blogs">
        <div className="section-title">
          <h2>
            Blogs From Local Json -- {name}, {id}
          </h2>
        </div>
        <div className="blogs-center">
          {blogs_43.map(({ id, title, descrip, category, img }) => (
            <Blog2_43
              key={id}
              id={id}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
              removeItem={removeItem}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-8">
          <button
            type="button"
            className="text-red-700 bg-red-200 capitalize px-4 py-2 hover:bg-red-300 text-base rounded"
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type="button"
            className="text-blue-700 bg-blue-200 capitalize px-4 py-2 hover:bg-blue-300 text-base rounded"
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogLocalJsonPage_43;
