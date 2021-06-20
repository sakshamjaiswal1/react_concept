import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    message: "random message",
  });
  const changeMessage = () => {
    setMessage("hello world");
  };
  const [name, setName] = useState("peter");
  const [age, setAge] = useState("24");
  const [message, setMessage] = useState("random message");

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
