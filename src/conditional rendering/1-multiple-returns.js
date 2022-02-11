import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setIsLoading(false);
          setError(true);
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        const { login } = data;
        setIsLoading(false);
        setUser(login);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>error...</h2>
      </div>
    );
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
