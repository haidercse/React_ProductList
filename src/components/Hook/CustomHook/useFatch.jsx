import React, { useState, useEffect } from "react";

const useFatch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("something is problem with data facthing");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setErrorMessage(null);
        // console.log(data);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading, errorMessage };
};

export default useFatch;
