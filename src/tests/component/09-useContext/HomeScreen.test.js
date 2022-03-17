import { mount } from "enzyme";
import React from "react";
import { HomeScreen } from "../../../component/09-useContext/HomeScreen";
import { UserContext } from "../../../component/09-useContext/UserContext";

describe("Pruebas en <HomeScreen />", () => {
  const user = {
    name: "fernando",
    email: "fernando@gmail.com",
  };
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
