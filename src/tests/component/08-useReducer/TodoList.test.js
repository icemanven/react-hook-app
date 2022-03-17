import { shallow } from "enzyme";
import React from "react";
import { TodoList } from "../../../component/08-useReducer/TodoList";
import { demoTodos } from "../../fixture/demoTodos";

const wrapper = shallow(<TodoList 
    todos={demoTodos} 
    handleDelete={jest.fn()} 
    handleToggle={jest.fn()} 
/>);

describe("Pruebas en <TodoList />", () => {
  test("debe de mostrarse correctamenet", () => {
    expect(wrapper).toMatchSnapshot();
    
  });

  test('debe de tener dos <TodoListItem />', () => { 
      expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
      expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
      expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
   })
});
