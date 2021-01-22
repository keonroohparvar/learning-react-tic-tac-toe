import { calculateWinner } from './helpers'

test('should return X as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('X');
  });

  test('should return O as the winner if it has the middle col', () => {
    // Arrange the test
    const squares = ['X', 'O', 'X', 'X', 'O', 'O', null, 'O', null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('O');
  });

  test('should return null as there is no winner yet', () => {
    // Arrange the test
    const squares = ['X', null, 'X', 'X', 'O', 'O', null, 'O', null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe(null); 
  });