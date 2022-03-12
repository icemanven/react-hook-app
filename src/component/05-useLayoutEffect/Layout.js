import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import './layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const {quote} = !!data && data[0];

  const pRef = useRef();

  useLayoutEffect(() => {
    setBoxSize(pRef.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className=" text-right blockquote">
          <p ref={pRef} className="mb-10">{quote}</p>
        </blockquote>

        <pre>
            {JSON.stringify(boxSize, null, 3)}
        </pre>

        <button onClick={() => increment()} className="btn btn-primary">
          Siguiente frase
        </button>
    </div>
  );
};
