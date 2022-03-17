import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomeHooks } from "../../../component/03-examples/MultipleCustomeHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomeHooks />", () => {


  test("debe mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {},
        decrement: () => {},
        reset: () => {},
      });
    
    const wrapper = shallow(<MultipleCustomeHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "fernando",
          quote: "Hola mundo",
        },
      ],
      loading: false,
      error: null,
    });

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {},
        decrement: () => {},
        reset: () => {},
      });

    const wrapper = shallow(<MultipleCustomeHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-10").text().trim()).toBe("Hola mundo");
    expect(wrapper.find("footer").text().trim()).toBe("fernando");
  });
});
