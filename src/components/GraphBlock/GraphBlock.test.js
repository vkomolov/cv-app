import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

///components
import GraphBlock from './';

let wrapper;
const score = "100";

describe('rendering GraphBlock', () => {

    beforeEach(() => {
        wrapper = shallow(<GraphBlock {...{score}} />);
    });

    it('renders div container with a child div', () => {
        expect(wrapper.childAt(0).type()).toEqual('div');
    });
});
