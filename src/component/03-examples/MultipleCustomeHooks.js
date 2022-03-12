import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "../02-useEffect/effects.css";

export const MultipleCustomeHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const {quote, author} = !!data && data[0];

  return (
    <div>
      <h1>Breaking bad Quoates</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className=" text-right blockquote">
          <p className="mb-10">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      {!loading && (
        <button onClick={() => increment()} className="btn btn-primary">
          Siguiente frase
        </button>
      )}
    </div>
  );
};
