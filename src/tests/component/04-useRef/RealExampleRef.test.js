import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../component/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => { 
    const wrapper = shallow(<RealExampleRef />)

    test('debe de mostrarse correctamente', () => { 
   
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomeHooks').exists()).toBe(false)
     })

     test('debe de mostrar el componente <MultipleCustomeHooks />', () => { 
         wrapper.find('button').simulate('click')
        expect(wrapper.find('MultipleCustomeHooks').exists()).toBe(true)
      })
 })