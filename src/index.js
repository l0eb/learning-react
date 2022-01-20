import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71NaQHQCo0L._AC_UY218_.jpg",
    title: "Batman: Year One",
    author: "by Frank Miller and David Mazzucchelli",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/A1x+WBn7cnL._AC_UY218_.jpg",
    title:
      "Batman Halloween Comic Fest Special Edition (2017) #1 (Batman (2016-))",
    author: "by Tom King",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81uzbSXGeTL._AC_UY218_.jpg",
    title: "Batman: The Dark Knight Returns",
    author: "by Frank Miller",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("hello");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        refrence{" "}
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
