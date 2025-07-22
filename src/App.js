import { useState } from 'react';
import './App.css';

function App() {
  // State to hold the value of the calculator input
  const [value, setValue] = useState('');
  return (
    <div className="App">

      {/* calculator whole body */}
      <div className="calculator">
        {/* calculator header */}
        <div className="header">
          <p>powered by Unity</p>
          <input type="text" value={value} />
        </div>

        {/* calculator body */}
        <div className="wrapper">
          {/* calculator buttons */}
          <div className="row1">
            <button className="close" onClick={e => setValue('')}>AC</button>
            <button onClick={e => setValue(value + e.target.value)} value={'%'}>%</button>
            <button onClick={e => setValue(value + e.target.value)} value={'/'}>/</button>
            <button className="close" onClick={e => setValue(value.slice(0, -1))}>DE</button>
          </div>

          <div className="row1">
            <button onClick={e => setValue(value + e.target.value)} value={'7'}>7</button>
            <button onClick={e => setValue(value + e.target.value)} value={'8'}>8</button>
            <button onClick={e => setValue(value + e.target.value)} value={'9'}>9</button>
            <button onClick={e => setValue(value + e.target.value)} value={'*'}>x</button>
          </div>
          
          <div className="row1">
            <button onClick={e => setValue(value + e.target.value)} value={'4'}>4</button>
            <button onClick={e => setValue(value + e.target.value)} value={'5'}>5</button>
            <button onClick={e => setValue(value + e.target.value)} value={'6'}>6</button>
            <button onClick={e => setValue(value + e.target.value)} value={'-'}>-</button>
          </div>

          <div className="row1">
            <button onClick={e => setValue(value + e.target.value)} value={'1'}>1</button>
            <button onClick={e => setValue(value + e.target.value)} value={'2'}>2</button>
            <button onClick={e => setValue(value + e.target.value)} value={'3'}>3</button>
            <button onClick={e => setValue(value + e.target.value)} value={'+'}>+</button>
          </div>
          
          <div className="row1">
            <button onClick={e => setValue(value + e.target.value)} value={'00'}>00</button>
            <button onClick={e => setValue(value + e.target.value)} value={'0'}>0</button>
            <button onClick={e => setValue(value + e.target.value)} value={'.'}>.</button>
            <button onClick={e => setValue(eval(value))}>=</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
