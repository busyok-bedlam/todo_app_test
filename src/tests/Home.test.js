import Home from '../components/home';
import Header from '../components/header';

import React from 'react';

describe('<Home />', () => {
    it('Success render', () => {
        const wrapper = mount(<Home />);
        const instance = wrapper.instance();
        expect(instance).toEqual(null)
    })

    it('has container', () => {
        const wrapper = mount(<Home />);
        expect(wrapper.find('.container')).toHaveLength(1)
    })

    it('contains Header', () => {
        const wrapper = mount(<Home />);
        expect(wrapper.find(Header)).toHaveLength(1);
    })


})