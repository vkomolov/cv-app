import React from 'react';
import { shallow } from 'enzyme';

import LoadingAlert from './';

let wrapper = shallow(<LoadingAlert />);

it('renders the img icon', () => {
    expect(wrapper.find('img').length).toEqual(1);
});