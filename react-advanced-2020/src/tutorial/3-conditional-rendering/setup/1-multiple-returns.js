import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const [IsError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (IsLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (IsError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
