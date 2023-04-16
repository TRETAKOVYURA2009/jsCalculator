import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [prevNumber, setPrevNumber] = useState(null)
  const [operation, setOperation] = useState(null)
  const [display, setDisplay] = useState('0')

  const onNumberClick = (number) => {
    if (!+display) {
      setDisplay(JSON.stringify(number))
    } else {
      setDisplay(display + number)
    }
  }

  const getComputed = () => {
    if (operation === "+") {
      return prevNumber + (+display)
    } if (operation === "-") {
      return prevNumber - (+display)
    } if (operation === "*") {
      return prevNumber * (+display)
    } if (operation === "/") {
      return prevNumber / (+display)
    }
    return +display
  }

  const onOperationClick = (operation) => {
    setOperation(operation)
    setPrevNumber(getComputed())
    setDisplay(null)
  }

  const onEqualClick = () => {
    setDisplay(getComputed().toString())
    setPrevNumber(null)
    setOperation(null)
  }

  const onDeleteClick = () => {
    setDisplay('0')
  }

  const onBackSpaceClick = () => {
    if (display !== '0') {
      setDisplay(display.slice(0, -1))
    }
  }

  const onDeleteAllClick = () => {
    setDisplay("0")
    setOperation(null)
    setPrevNumber(null)
  }

  useEffect(() => {
    console.log('display', display)
    console.log('prevNumber', prevNumber)
  }, [display, prevNumber])

  return (
    <div className="App">
      <div className="result-window">
        <span>{ display || prevNumber }</span>
      </div>
      <div className="keyboard"> 
        <div className="numbers-block">
          <div className="row">
            <button className="number button" onClick={() => onNumberClick(1)}>1</button>
            <button className="number button" onClick={() => onNumberClick(2)}>2</button>
            <button className="number button" onClick={() => onNumberClick(3)}>3</button>
          </div>
          <div className="row">
            <button className="number button" onClick={() => onNumberClick(4)}>4</button>
            <button className="number button" onClick={() => onNumberClick(5)}>5</button>
            <button className="number button" onClick={() => onNumberClick(6)}>6</button>
          </div>
          <div className="row">
            <button className="number button" onClick={() => onNumberClick(7)}>7</button>
            <button className="number button" onClick={() => onNumberClick(8)}>8</button>
            <button className="number button" onClick={() => onNumberClick(9)}>9</button>
          </div>
          <div className="row">
            <button className="number button" onClick={() => onNumberClick(0)}>0</button>
          </div>
        </div>
        <div className="operations-block">
          <div className="row">
          <button className="operations button" onClick={() => onBackSpaceClick()} disabled={!display}>&#8592;</button>
          </div>
          <div className="row">
            <button className="operations button" onClick={() => onDeleteClick()} disabled={!display}>С</button>
            <button className="operations button" onClick={() => onDeleteAllClick()}>CE</button>
          </div>
          <div className="row">
            <button className="operations button" onClick={() => onOperationClick("*")}>&#215;</button>
            <button className="operations button" onClick={() => onOperationClick("/")}>&#247;</button>
          </div>
          <div className="row">
            <button className="operations button" onClick={() => onOperationClick("+")}>+</button>
            <button className="operations button" onClick={() => onOperationClick("-")}>-</button>
          </div>
        </div>
      </div>
      <div className="row">
        <button 
          className="operations button" 
          onClick={onEqualClick} 
          disabled={!operation}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
