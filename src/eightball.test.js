import React from 'react';
import { render } from '@testing-library/react';
import EightBall from './EightBall'
test('EightBall renders without crashing', () => {
    render(<EightBall />)
})

it('should match snapshot', () => {
    const { asFragment } = render(<EightBall />)
    expect(asFragment()).toMatchSnapshot()
})