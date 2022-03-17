import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../component/09-useContext/LoginScreen';
import { UserContext } from '../../../component/09-useContext/UserContext';

describe("Pruebas en <HomeScreen />", () => {
    const setUser = jest.fn();
    
    const wrapper = mount(
      <UserContext.Provider
        value={{
          setUser
        }}
      >
        <LoginScreen />
      </UserContext.Provider>
    );
  
    test("debe de mostrarse correctamente", () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el valor esperado', () => { 
        wrapper.find('button').simulate('click');
        
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith({id: 123, name: 'Fernando'});
        
     })
  });