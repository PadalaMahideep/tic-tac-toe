import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import calculateWinner from './components/winner';
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
    console.log(squares);

    if (squares[clickedposistion] || winnermsg) {
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

  const winnermsg = calculateWinner(squares);
  const nextplayer = IsXNext ? 'X' : 'O';

  const statusmsg = winnermsg
    ? `Winner is ${winnermsg}`
    : `next player is ${nextplayer}`;

  return (
    <div className="app">
      <h2>{statusmsg}</h2>
      <Board squares={squares} handleSquares={handleSquares} />
    </div>
  );
}

export default App;
