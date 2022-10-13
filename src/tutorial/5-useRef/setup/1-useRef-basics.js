import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  //SETTING UP THE USEREF
  //we set a useref and the initial value
  const refContainer=useRef(null);

  const handleSubmit=(e)=>{
    e.preventDefault();
    //we do not call onchange or anything each and every time we type on the input
    //Instead, we use ref, add the current property and the value
    console.log(refContainer.current.value);
    //current will point to a particular div
  }

  useEffect(()=>{
    console.log(refContainer.current)
    refContainer.current.focus();
  });
  

  return <>
  <form className='form' onSubmit={handleSubmit}>
    <div>
      {/**Setting the ref attribute of the ref container */}
      <input type="text" ref={refContainer} />
      <button type='submit'>Submit</button>
    </div>
  </form>
  </>;
};

export default UseRefBasics;
