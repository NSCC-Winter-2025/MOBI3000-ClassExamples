import './Button.css';
import {useEffect, useState} from "react";

export const Button = ({text}) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Clicked!');
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setMessage('');
    }, 1000);
    return () => clearTimeout(t);
  }, [message]);

  return (
    <div className="button">
      <h1>{message}</h1>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
};