import React from 'react';
import { shallow } from 'enzyme';

///components
import { dataReady } from '../../utils/forTesting';
import AsideContent from './';
import AsideItem from '../AsideItem';

let wrapper;
const asideContent = dataReady.personal.aside;

describe('Rendering Aside Content', () => {

    beforeEach(() => {
        wrapper = shallow(<AsideContent {...{asideContent}} />);
    });

    it('renders the array of AsideItem', () => {
        expect(wrapper.find(AsideItem).length).toEqual(2);
    });
});