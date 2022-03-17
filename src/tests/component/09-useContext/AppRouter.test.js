import { mount } from "enzyme";
import React from "react";
import { AppRouter } from "../../../component/09-useContext/AppRouter";
import { UserContext } from "../../../component/09-useContext/UserContext";

describe("Pruebas en <AppRouter />", () => {
  const user = {
    id: 1,
    name: 'fernando'
  };
  const wrapper = mount(
    <UserContext.Provider value={{
        user
    }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
