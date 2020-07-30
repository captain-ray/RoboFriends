import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Card from './Card';

it("expects to render Card component", () => {
    expect(shallow(<Card />).length).toEqual(1);
})
