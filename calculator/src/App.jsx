import './App.css'
import {useState} from "react";
import {ButtonGrid} from "./ButtonGrid.jsx";
import {Display} from "./Display.jsx";

function App() {

  const [result, setResult] = useState("0");
  const [memory, setMemory] = useState(0.0);
  const [operator, setOperator] = useState("");

  const handleOperandClick = (text) => {
    console.log('clicked');
    if (text !== '.') {
      setResult((prev) => {
        if (prev === '0') {
          return text;
        } else {
          return prev + text;
        }
      })
    } else if (!result.includes(".")) {
      setResult((prev) => prev + text);
    }
  };

  const handleOperatorClick = (text) => {
    switch (text) {
      case "C":
        setResult("0");
        setMemory(0.0);
        setOperator("");
        break;
      case "-":
      case "X":
      case "+":
        setResult("");
        setMemory(parseFloat(result));
        setOperator(text);
        break
      case "=":
        switch (operator) {
          case "+": {
            const value1 = memory;
            const value2 = parseFloat(result);
            setResult((value1 + value2).toString());
            break;
          }
          case "-": {
              const value1 = memory;
              const value2 = parseFloat(result);
              setResult((value1 - value2).toString());
              break;
            }
            case "X": {
                const value1 = memory;
                const value2 = parseFloat(result);
                setResult((value1 * value2).toString());
                break;
            }
        }
        break;
    }
  };

  return (
    <div className="app">
      <Display text={result} />
      <ButtonGrid onOperandClick={handleOperandClick} onOperatorClick={handleOperatorClick} />
    </div>
  )
}

export default App
