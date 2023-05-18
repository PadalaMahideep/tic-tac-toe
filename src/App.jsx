/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import calculateWinner from './components/winner';
import Statusmessage from './components/statusmessage';
import History from '../History';

const NEW_GAME = [{ squares: Array(9).fill(null), IsXNext: false }];

function App() {
  // let count = 0;
  // const onbutton = () => {
  //   count = count + 1;
  //   console.log(count);
  // };

  // const [count, setCount] = useState(1);
  // const onbutton = () => {
  //   setCount(count + 1);
  // };

  // const [count, setCount] = useState(1);
  // const onbutton = () => {
  //   setCount(count => {
  //     return count + 1;
  //   });
  // };

  //   return (
  //     <div className="app">
  //       <button onClick={onbutton} id="butt">
  //         count
  //       </button>
  //       <div>{count}</div>
  //     </div>
  //   );
  // }
  // const [squares, setsquares] = useState(Array(9).fill(null));
  // const [IsXNext, setIsXNext] = useState(false);

  // const handleSquares = clickedposistion => {
  //   // console.log(squares);

  //   //   if (squares[clickedposistion] || winner) {
  //   //     return;
  //   //   }

  //   //   setsquares(currentsquares => {
  //   //     return currentsquares.map((currentsquareval, posistion) => {
  //   //       if (clickedposistion == posistion) {
  //   //         return IsXNext ? 'X' : 'O';
  //   //       }
  //   //       return currentsquareval;
  //   //     });
  //   //   });

  //   //   setIsXNext(currentisxnext => !currentisxnext);
  //   // };

  const [history, sethistory] = useState(NEW_GAME);

  const [currentMove, setcurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);
  const handleSquares = clickedposistion => {
    // console.log(squares);

    //   if (squares[clickedposistion] || winner) {
    //     return;
    //   }

    //   setsquares(currentsquares => {
    //     return currentsquares.map((currentsquareval, posistion) => {
    //       if (clickedposistion == posistion) {
    //         return IsXNext ? 'X' : 'O';
    //       }
    //       return currentsquareval;
    //     });
    //   });

    //   setIsXNext(currentisxnext => !currentisxnext);
    // };

    if (gamingBoard.squares[clickedposistion] || winner) {
      return;
    }

    sethistory(currenthistory => {
      const isTransversing = currentMove + 1 !== currenthistory.length;

      const lastGamingstate = isTransversing
        ? currenthistory[currentMove]
        : history[history.length - 1];

      const nextSquareState = lastGamingstate.squares.map(
        (squareval, posistion) => {
          if (clickedposistion === posistion) {
            return lastGamingstate.IsXNext ? 'X' : 'O';
          }
          return squareval;
        }
      );

      const base = isTransversing
        ? currenthistory.slice(0, currenthistory.indexOf(lastGamingstate) + 1)
        : currenthistory;

      return base.concat({
        squares: nextSquareState,
        IsXNext: !lastGamingstate.IsXNext,
      });
    });

    setcurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setcurrentMove(move);
  };

  const newgame = () => {
    sethistory(NEW_GAME);
    setcurrentMove(0);
  };

  return (
    <div className="app">
      <Statusmessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquares={handleSquares}
        winningSquares={winningSquares}
      />
      <h2 style={{ fontWeight: 'normal', color: 'black' }}>
        current game history
      </h2>
      <button
        type="button"
        onClick={newgame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        NEWGAME
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
