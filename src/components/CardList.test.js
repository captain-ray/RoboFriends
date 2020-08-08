import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it("expects to render Card component", () => {
    const mockRobots = [
        {
            id: "111",
            name:"Jone Snow",
            email:"jonesnow@gmail.com"
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
