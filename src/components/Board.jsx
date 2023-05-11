import { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [IsXNext, setIsXNext] = useState(false);

  const handleSquares = clickedposistion => {
    console.log(squares);

    if (squares[clickedposistion]) {
      return;
    }

    setsquares(currentsquares => {
      return currentsquares.map((currentsquareval, posistion) => {
        if (clickedposistion == posistion) {
          return IsXNext ? 'X' : 'O';
        }
        return currentsquareval;
      });
    });

    setIsXNext(currentisxnext => !currentisxnext);
  };

  const rendersquare = posistion => {
    return (
      <Square
        value={squares[posistion]}
        onClick={() => {
          handleSquares(posistion);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};

export default Board;
