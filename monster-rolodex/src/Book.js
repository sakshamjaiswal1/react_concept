import React from 'react'


const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert("hello worlds");
};
const complexExample = (author) => {};
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        // console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Refrence Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example{" "}
      </button>
    </article>
  );
};


export default Book
