import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');

  const [isError, setIsError] = useState(false);
  //if its true it returns the first value and vice versa
  // const firstValue = text || 'hello world';
  // //if its true, it returns the second value and vice versa
  // const secondValue = text && 'hello world';

  const settingError = ()=>{
    //this function sets the error to the opposite value of the current value
    setIsError(!isError);
  }

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>Value: {secondValue}</h1> */}

    <h1>{text || "John Doe"}</h1>
    <button className='btn' onClick={settingError}>toggle error</button>
    {/*Used to check whether is error is true. Incase its true, you display the error */}
    {isError && <h1>Error.....</h1>}
    {/* {text && <h1>Hello World</h1>}
    {!text && <h1>Hello World</h1>} */}
    {isError? <p>there is an Error....</p>: <div>
      <h2>there is no Error...</h2>
      </div>}
  </>
};

export default ShortCircuit;
