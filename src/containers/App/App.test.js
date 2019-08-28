import React from 'react';
import { shallow } from 'enzyme';

///components
import App from './index';
import AsideBar from '../AsideBar';
import ContentBar from '../ContentBar';

let wrapper;
const initialState = {
    error: false,
    filter: "personal",
    data: {}
};

describe('App renders Children', () => {
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders AsideBar Component', () => {
        expect(wrapper.find(AsideBar).length).toEqual(1);
    });

    it('renders ContentBar Component', () => {
        expect(wrapper.find(ContentBar).length).toEqual(1);
    });
});

describe('Work with the State', () => {

    beforeEach(() => {
        wrapper = shallow(<App {...{initialState}}/>);
    });

    it('creates the State from the attribute', () => {
      expect(wrapper.state()).toEqual(initialState);
    });
});