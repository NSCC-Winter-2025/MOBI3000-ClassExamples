import {useState} from "react";

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