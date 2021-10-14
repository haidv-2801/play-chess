import  { useEffect, useState } from 'react';

const useCounter = ({ forward = true, initValue = 0 }) => {
  const [counter, setCounter] = useState(initValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward == true) {
        setCounter((preState) => preState + 1);
      } else {
        setCounter((preState) => preState - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return [counter, setCounter];
};

export default useCounter;
