import {useEffect, useState} from "react";
import './Counter.css';

export const Counter = ({countBy}) => {
  const [count, setCount] = useState(0);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    console.log('click event called')
    setPressed(!pressed);
  };

  console.log('component rendered');

  useEffect(() => {
    //console.log('useEffect is called.')
  }, []);


  useEffect(() => {
    console.log('Timer is started/stopped.');
    let t;
    if (pressed) {
      t = setInterval(() => {
        setCount((prev) => prev + countBy);
      }, 1000);
    }
    return () => {
      console.log('useEffect is completed.');
      clearInterval(t);
    }
  }, [pressed, countBy]);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={handleClick}>Press Me</button>
    </div>
  )
}