import booklistData from "../assets/data/booklistData2";
import BookListWrapper_43 from "../assets/wrappers/BookList_43";
console.log("booklist", booklistData);

const BookListPage_43 = () => (
  <BookListWrapper_43>
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
  </BookListWrapper_43>
);

export default BookListPage_43;
