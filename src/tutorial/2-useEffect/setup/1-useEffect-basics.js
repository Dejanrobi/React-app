import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

//USEFFECT RUNS AFTER EVERY RENDER
//HOOKS CANNOT BE PLACED AS CONDITIONALS
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //Increase Value Function
  const increaseValue = ()=>{
    setValue(value+1);
  }

  //creating a use Effects Hook and a call back function
  useEffect(()=>{
    console.log("Call use effect")
    //use conditons within use effects
    if(value>0){
      document.title = `New Message ${value}`; //this is the title of the page(changed whenever the count  value is increased)
    }
    
  }, [value])
  //[value]: this is the initial render in which the useEffect is supposed to run after its rendered.
  //if the use Effects is to run on the initial render, we add a second argument and pass it as an empty array
  //if an empty array is used, then the use effect does not run as the render continues to occur hence we add the initial render to the array argument.
  console.log("render component")

  return <>
  <h1>{value}</h1>
  <button className='btn' onClick={increaseValue}>Increase Value</button>
  </>
};

export default UseEffectBasics;
