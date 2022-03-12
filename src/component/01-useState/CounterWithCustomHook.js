import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './Counter.css'

export const CounterWithCustomHook = () => {

    const factor = 2;
    const {state, increment, decrement, reset} = useCounter(100);

  return (
    <>
        <h1>Counter with hook: {state}</h1>
        <hr />

        <button onClick={() => increment(factor)} className='btn'> +{factor}</button>
        <button onClick={reset} className='btn'> reset</button>
        <button onClick={() => decrement(factor)} className='btn'> -{factor}</button>
    </>
  )
}
