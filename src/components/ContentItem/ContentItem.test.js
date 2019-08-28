import React from 'react';
import { shallow } from 'enzyme';

///components
import ContentItem from './';
import { dataReady } from '../../utils/forTesting';

const itemP = dataReady.personal.content.details[0];
const itemLi = dataReady.personal.content.details[1];
const itemA = dataReady.personal.content.details[2];
const itemFile = dataReady.personal.content.details[3];

let wrapper;

describe('ContentItem renders components', () => {

    beforeEach(() => {
        wrapper = shallow(<ContentItem item={itemLi} />);
    });

    it('renders h3 heading with the text, taken from the data', () => {
        expect(wrapper.find('h3').text()).toEqual('subheding h3');
    });

    it('renders h4 heading with the text, taken from the data', () => {
        expect(wrapper.find('h4').text()).toEqual('Comments');
    });

    /**@description if the data object has property "remark", then
     * to render two blocks, wrapped in flexbox of Parent;
     * */
    it('renders two children', () => {
        expect(wrapper.children().length).toEqual(2);
    });

    /**@description if the data object has property 'li', then
     * to render the list ul with the array of li elements, taken from
     * the data property 'li';
     * */
    it('renders ul list with the correct number of li elements', () => {
        expect(wrapper.find('ul').children().length).toEqual(2);
    });

    /**@description if the data object has property 'p', then
     * to render the array of p elements, taken from the data property 'p';
     * */
    it('renders the correct number of p elements', () => {
        wrapper = shallow(<ContentItem item={itemP} />);
        expect(wrapper.find('p').length).toEqual(2);
    });

    /**@description if the data object has property 'a', then
     * to render the array of a elements, taken from the data property 'a';
     * */
    it('renders the correct number of links "a"', () => {
        wrapper = shallow(<ContentItem item={itemA} />);
        expect(wrapper.find('a').length).toEqual(1);
    });

    /**@description if the data object has property 'file', then
     * to render the array of a elements, taken from the data property 'file';
     * */
    it('renders the correct number of elements "a" with download attr', () => {
        wrapper = shallow(<ContentItem item={itemFile} />);
        expect(wrapper.find('a').length).toEqual(2);
    });
});
