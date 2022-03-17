import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('test <HookApp />', () => {
    test('should render ok', () => { 
        const wrapper= shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();
     });
});
