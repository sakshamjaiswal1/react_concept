import React from "react";
import ReactDom from "react-dom";

// css
import "/code/react_udemy/monster-rolodex/src/index.css";

import { data } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

// setup vars

function Booklist() {
  console.log(greeting);
  return (
    <>
      <section className="booklist">
        {data.map((book) => {
          // const { img, title, author } = book;
          return <SpecificBook key={book.id} {...book}></SpecificBook>;
        })}
      </section>
    </>
  );
}
ReactDom.render(<Booklist />, document.getElementById("root"));
