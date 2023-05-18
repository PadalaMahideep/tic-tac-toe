/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import calculateWinner from './components/winner';
import Statusmessage from './components/statusmessage';
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

  const [squares, setsquares] = useState(Array(9).fill(null));
  const [IsXNext, setIsXNext] = useState(false);

  const handleSquares = clickedposistion => {
    // console.log(squares);

    if (squares[clickedposistion] || winner) {
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

  const winner = calculateWinner(squares);

  return (
    <div className="app">
      <Statusmessage winner={winner} IsXNext={IsXNext} squares={squares} />
      <Board squares={squares} handleSquares={handleSquares} />
    </div>
  );
}

export default App;
