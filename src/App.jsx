import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
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

  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;
