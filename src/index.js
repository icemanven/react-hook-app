import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainApp } from './component/09-useContext/MainApp';


// import { TodoApp } from './component/08-useReducer/TodoApp';
// import { Padre } from './component/07-tarea-memo/Padre';
// import { CallbackHook } from './component/06-memos/CallbackHook';
// import { MemoHook } from './component/06-memos/MemoHook';
// import { Memorize } from './component/06-memos/Memorize';
// import { Layout } from './component/05-useLayoutEffect/Layout';
// import { RealExampleRef } from './component/04-useRef/RealExampleRef';
//import { FocusScreen } from './component/04-useRef/FocusScreen';
//import { MultipleCustomeHooks } from './component/03-examples/MultipleCustomeHooks';
// import { FormWithCustomHook } from './component/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './component/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './component/01-useState/CounterWithCustomHook';
// import { CounterApp } from './component/01-useState/CounterApp';
// import { HookApp } from './HookApp';

ReactDOM.render(
    <MainApp />,
  document.getElementById('root')
);