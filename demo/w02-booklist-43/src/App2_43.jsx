import "./App_43.scss";
import booklistData from "./booklistData2";

console.log("booklist", booklistData);

const App2_43 = () => (
  <>
    <Booklist_43 />
  </>
);

const Booklist_43 = () => (
  <section className="booklist">
    {booklistData.map(({ id, img, title, author }) => (
      <Book_43 key={id} img={img} title={title} author={author} />
    ))}
  </section>
);

const Book_43 = ({ img, title, author }) => (
  <article className="book">
    <img src={img} />
    <div className="bookinfo">
      <h1>{title}</h1>
      <h4>{author}</h4>
    </div>
  </article>
);

export default App2_43;
