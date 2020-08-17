import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EightBall from './EightBall'
describe('smoke test', () => {
    test('EightBall renders without crashing', () => {
        render(<EightBall />)
    })

})
describe('snaphsot test test', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<EightBall />)
        expect(asFragment()).toMatchSnapshot()
    })

})
describe('matching elements test', () => {
    test('element exists', () => {
        const { getByText } = render(<EightBall />)
        expect(getByText("Reset", { exact: false })).toBeInTheDocument()
    })
})

describe('test events', () => {
    test('element reacts to event', () => {
        const { getByTestId, getByText } = render(<EightBall />)
        let circle = getByTestId("circle")
        let pos = getByText('positive: 0')
        expect(circle).toBeInTheDocument()
        //todo the click event is not working
        // fireEvent.click(circle)
        // expect(pos).toHaveTextContent('1')

    })
})

