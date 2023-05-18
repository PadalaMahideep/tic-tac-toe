import React from 'react';
const Statusmessage = ({ winner, IsXNext, squares }) => {
  const noMoves = squares.every(squareval => squareval != null);
  const nextplayer = IsXNext ? 'X' : 'O';

  const renderstatusmessgae = () => {
    if (winner) {
      return (
        <React.Fragment>
          {' '}
          winner is{' '}
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>{' '}
        </React.Fragment>
      );
    }
    if (!winner && noMoves) {
      return (
        <React.Fragment>
          {' '}
          <span className="text-orange">O</span> AND{' '}
          <span className="text-green">X</span> is tied
        </React.Fragment>
      );
    }
    if (!winner && !noMoves) {
      return (
        <React.Fragment>
          the next player is{' '}
          <span className={IsXNext ? 'text-green' : 'text-orange'}>
            {' '}
            {nextplayer}
          </span>
        </React.Fragment>
      );
    }

    return null;
  };
  return <div className="status-message">{renderstatusmessgae()}</div>;
};

export default Statusmessage;
