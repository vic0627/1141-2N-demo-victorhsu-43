import "./App_43.scss";
import booklistData from "./booklistData2";

console.log("booklist", booklistData);

const App_43 = () => (
  <section className="booklist">
    {booklistData.map((book) => (
      <article className="book">
        <img src={book.img} />
        <div className="bookinfo">
          <h1>{book.title}</h1>
          <h4>{book.author}</h4>
        </div>
      </article>
    ))}
  </section>
);

export default App_43;
