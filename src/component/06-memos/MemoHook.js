import React, { useMemo, useState } from 'react'
import procesoPesado from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';


import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const {counter, increment} = useCounter(5000);

    

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    const [show, setShow] = useState(true);
  return (
    <div>
        <h1>Memo Hook</h1>
        <h3>Counter: <small>{counter}</small></h3>
        <hr />

        <p>{memoProcesoPesado}</p>

        <button onClick={() => increment()} className='btn btn-primary'> +1</button>

        <button className='btn btn-outline-primary ms-3' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>


    </div>
  )
}
