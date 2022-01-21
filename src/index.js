import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//import from folder
import { data } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
