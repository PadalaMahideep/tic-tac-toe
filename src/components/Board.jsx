import Square from './Square';
const Board = ({ squares, handleSquares, winningSquares }) => {
  const rendersquare = posistion => {
    const isWinningsquare = winningSquares.includes(posistion);
    return (
      <Square
        value={squares[posistion]}
        isWinningsquares={isWinningsquare}
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
