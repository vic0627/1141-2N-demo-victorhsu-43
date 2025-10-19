import { FaGlobe, FaMugSaucer } from "react-icons/fa6";

const Blog_43 = ({ id, img, category, title, descrip }) => {
  return (
    <article id={id} className="blog">
      <img src={img} alt="Coffee photo" className="img blog-img" />
      <div className="blog-content">
        <span>
          {category}
          {category === "lifestyle" ? <FaMugSaucer /> : <FaGlobe />}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <a href="#">read more</a>
      </div>
    </article>
  );
};

export default Blog_43;
