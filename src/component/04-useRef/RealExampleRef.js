import React, { useState } from 'react'

import '../02-useEffect/effects.css';
import { MultipleCustomeHooks } from '../03-examples/MultipleCustomeHooks';

export const RealExampleRef = () => {

const [show, setShow] = useState(false);

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr />

        {show && <MultipleCustomeHooks />}

        <button
            className='btn btn-primary mt-5'
            onClick={() => setShow(!show)}
        >
            Show/Hide
        </button>
    </div>
  )
}
