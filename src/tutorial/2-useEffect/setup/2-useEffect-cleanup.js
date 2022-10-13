import React, { useState, useEffect } from 'react';

// cleanup function
// second argument
//CHECKING THE SIZE OF THE WINDOW

//USEEFFECT: runs once an item is rendered.
//useEffectCleanup Component
const UseEffectCleanup = () => {
  //setting the useState Values
  const [size, setSize] = useState(window.innerWidth);
  //console.log(size);

  //creating a checkSize function
  let checkSize=()=>{
    setSize(window.innerWidth);
  }

  // window.addEventListener("resize", checkSize);
  //The UseEffect runs everytime the component re-renders.
  //use effect Functon
  useEffect(()=>{
    window.addEventListener("resize", checkSize);

    //cleaning up
    return ()=>{
      console.log("cleanup");
      window.removeEventListener("resize", checkSize)
    }

  })

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

//exporting the useEffectCleanup Component.
export default UseEffectCleanup;
