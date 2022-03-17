import { shallow } from "enzyme";
import React from "react";
import { TodoListItem } from "../../../component/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixture/demoTodos";

describe("Pruebas en <TodoListItem />", () => {
  const todo = demoTodos[0];
  const index = 1;
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem {...{ todo, index, handleDelete, handleToggle }} />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar a la funcion handledelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  test("debe de llamar a la funcion handleToggle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  test("debe mostrar el texto correctamente", () => {
    const text = wrapper.find("p").text().trim();
    expect(text).toBe(`2. ${todo.desc}`);
  });

  test("debe de tener la clase complete si el todo.don esta en true", () => {
    const todoDone = { ...todo };
    todoDone.done = true;

    const wrapper = shallow(<TodoListItem todo={todoDone} />);

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
