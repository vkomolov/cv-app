import React from 'react';
import { shallow } from 'enzyme';

import AsideBar from './';
import { dataReady } from '../../utils/forTesting';
import LoadingAlert from '../../components/LoadingAlert';
import AsideContent from '../../components/AsideContent';

let wrapper;
const attr = {
    error: false,
    filter: "personal",
    data: {},
    setFilter: () => {}
};

const attrFetched = {
    ...attr,
    data: dataReady
} ;

describe('AsideBar renders components', () => {

    describe('it renders components when the State.data is still empty:', () => {
        beforeEach(() => {
            wrapper = shallow(<AsideBar {...{attr}} />);
        });

        it('renders "loading icon", when the State.data is empty', () => {
            expect(wrapper.find(LoadingAlert).length).toEqual(1);
        });

        it('renders only the "loading icon" when the State.data is empty', () => {
            expect(wrapper.children().length).toEqual(1);
        });

    });

    describe('rendering components when the State.data is set', () => {
        beforeEach(() => {
            wrapper = shallow(<AsideBar attr={attrFetched} />);
        });

        it('renders NO "loading icon", when the State.data is not empty and ' +
            'the State.error is "false"', () => {
            expect(wrapper.find(LoadingAlert).length).toEqual(0);
        });

        it('renders h1 heading', () => {
            expect(wrapper.find('h1').length).toEqual(1);
        });

        it('renders image', () => {
            expect(wrapper.find('img').length).toEqual(1);
        });

        it('renders the list of State.data properties ' +
            'except properties: "fullName", "creationDate", "photo"', () =>{
            expect(wrapper.find('ul').children().length).toEqual(1);
        });

    });
});
