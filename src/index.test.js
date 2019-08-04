// NOTE: this needs to be first in the imports
import parsePropTypes from 'parse-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import { Greetings } from './index';
import generateFake from 'prop-types-faker';


describe('Greetings', () => {
    let fakeProps;

    beforeEach(() => {
        fakeProps = generateFake(Greetings);
    });

    it('should display the name', () => {
        const expectedText = `hello ${fakeProps.name}!`;

        const actual = shallow(<Greetings {...fakeProps} />)

        expect(actual.find('span').text()).toBe(expectedText)
    });
});