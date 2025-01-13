import {StrictMode, useState} from 'react';
import { createRoot } from 'react-dom/client'

export const HelloWorld = ({text, uppercase}) => {

  const [hello, setHello] = useState(text ?? "Hello from space!");
  const [upperCase, setUpperCase] = useState(uppercase ?? false);

  const toggleCase = () => {
    if (upperCase) {
      setHello(hello.toLowerCase());
    } else {
      setHello(hello.toUpperCase());
    }
    setUpperCase(!upperCase);
  }

  return (
    <h1 onClick={toggleCase}>{hello}</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld text={'Hello ' + 'World!'} uppercase={true} />
    <HelloWorld text='Goodbye World!' uppercase={false}/>
    <HelloWorld text='Hello from Mars!' uppercase={false}/>
    <HelloWorld />
  </StrictMode>,
)
