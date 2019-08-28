import React from 'react';
import { shallow } from 'enzyme';

///components
import ContentBar from './';
import ContentItem from '../../components/ContentItem';
import LoadingAlert from '../../components/LoadingAlert';
import { dataReady } from '../../utils/forTesting';

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

let wrapper;

describe('ContentBar renders components', () => {

    describe('it renders components when the State.data of the Parent' +
        ' is still empty:', () => {
        beforeEach(() => {
            wrapper = shallow(<ContentBar {...{attr}} />);
        });

        it('renders only one child element', () => {
            expect(wrapper.children().length).toEqual(1);
        });

        it('renders "loading icon"', () => {
            expect(wrapper.find(LoadingAlert).length).toEqual(1);
        });
    });

    describe('rendering components when the State.data is set', () => {
        beforeEach(() => {
            wrapper = shallow(<ContentBar attr={attrFetched} />);
        });

        it('renders NO "loading icon"', () => {
            expect(wrapper.find(LoadingAlert).length).toEqual(0);
        });

        it('renders the array of ContentItem', () => {
            expect(wrapper.find(ContentItem).length).toEqual(4);
        });
    });
});