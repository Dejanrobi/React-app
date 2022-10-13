import React, { useState } from 'react';

const UseStateCounter = () => {
  //setting a useState Hook 
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  //decrease function
  const decrease=()=>{
    setValue(value-1);
  }

  //reset function
  const reset=()=>{
    setValue(0);
  }

  //increase function 
  const increase=()=>{
    setValue(value+1);
  }

  //Complex Increase Function
  const complexIncrease=()=>{
    //we wil create a set Timeout, Passing a callback function and the time to 
    //take to execute the callback function
    setTimeout(()=>{
      //setSecondValue(secondValue+1)

      //recording the amount of clicks and returning the resultant clicks
      setSecondValue((prevState)=>{
        return prevState+1;
      });
    }, 2000)

  }

  //Complex Decrease Function
  const complexDecrease=()=>{
    setTimeout(()=>{
      setSecondValue((prevState)=>{
        return prevState-1;
      })
    }, 2000)
  }

  //Complex Reset Function
  const complexReset=()=>{
    setTimeout(()=>{
      setSecondValue(0)
    }, 2000)
  }

  return <>
  <section style={{margin:"4rem 0"}}>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={decrease}>Decrease</button>
    <button className='btn' onClick={reset}>Reset</button>
    <button className='btn' onClick={increase}>Increase</button>
  </section>

  <section style={{margin:"4rem 0"}}>
    <h2>Regular Counter</h2>
    <h1>{secondValue}</h1>
    <button className='btn' onClick={complexIncrease}>Increase Later</button>
    <button className='btn' onClick={complexReset}>Reset Later</button>
    <button className='btn' onClick={complexDecrease}>Decrease Later</button>
  </section>
  </>
};

export default UseStateCounter;
