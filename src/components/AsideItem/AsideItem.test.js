import React from 'react';
import { shallow } from 'enzyme';

///components
import { dataReady } from '../../utils/forTesting';
import AsideItem from '../AsideItem';
import GraphBlock from '../GraphBlock'

let wrapper;
const itemDataStr = dataReady.personal.aside.details[0];
const itemDataArr = dataReady.personal.aside.skills[0];

describe('AsideItem renders children if "details" prop is String', () => {

    beforeEach(() => {
        wrapper = shallow(<AsideItem item={itemDataStr} />);
    });

    it('renders h3 heading', () => {
        expect(wrapper.find('h3').text()).toEqual('title of the Aside Item');
    });

    it('renders span', () => {
        expect(wrapper.find('span').length).toEqual(1);
    });

});

describe('AsideItem renders children if "details" prop is Array', () => {

    beforeEach(() => {
        wrapper = shallow(<AsideItem item={itemDataArr} />);
    });

    it('renders h3 heading', () => {
        expect(wrapper.find('h3').text()).toEqual('title of the Aside Skills Item');
    });

    it ('renders the array of elements which contain span', () => {
        expect(wrapper.find('span').length).toEqual(1);
    });

    it ('renders the data.title value in span', () => {
        expect(wrapper.find('span').text())
            .toEqual("title of the Skill");
    });

    it ('renders GraphBlock', () => {
        expect(wrapper.find(GraphBlock).length).toEqual(1);
    });
});