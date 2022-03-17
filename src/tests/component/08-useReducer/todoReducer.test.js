import { todoReducer } from "../../../component/08-useReducer/todoReducer";
import { demoTodos } from "../../fixture/demoTodos";


describe('probar todoReducer', () => { 
    test('debe de retornar el estado por defecto', () => { 
        const state = todoReducer();

        expect(state).toEqual([]);
     })

    test('debe de retornar el estado que se envia', () => { 
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
     })

     test('debe agreagar un estado', () => { 
         const newTodo = {id:3, desc: 'Aprender Angular', done: false};

         const state = todoReducer(demoTodos, {type: 'add', payload: newTodo});

         expect(state).toEqual([...demoTodos, newTodo]);
      })

      test('debe borrar un estado', () => { 

        const state = todoReducer(demoTodos, {type: 'delete', payload: 1});

        expect(state).toEqual(demoTodos.filter(todo => todo.id !== 1));
     })

     test('debe hacer toggle del todo', () => { 

        let state = todoReducer(demoTodos, {type: 'toggle', payload: 2});

        expect(state.find(todo => todo.id === 2).done).toBe(true);

        state = todoReducer(state, {type: 'toggle', payload: 2});

        expect(state.find(todo => todo.id === 2).done).toBe(false);
     })
 })