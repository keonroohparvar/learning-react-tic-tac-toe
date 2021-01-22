import { render, fireEvent } from '@testing-library/react';

import Board from './Board'

test('Task 1- testing that the board renders correct alternating values', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>)
    const buttons = board.queryAllByRole('button')

    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])

    expect(buttons[0].innerHTML).toBe('X')
    expect(buttons[1].innerHTML).toBe('O')
})

test('Task 2 - Status message alternates', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>)
    const buttons = board.queryAllByRole('button')

    fireEvent.click(buttons[4])
    let playerStatus = board.getByText('Next player: O')
    expect(playerStatus.innerHTML).toBe('Next player: O')
    expect(buttons[4].innerHTML).toBe('X')

    fireEvent.click(buttons[1])
    expect(playerStatus.innerHTML).toBe('Next player: X')

    
    expect(buttons[1].innerHTML).toBe('O') 

})
