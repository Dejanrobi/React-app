import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  const settingShow=()=>{
    //sets the show opposite to the current item
    setShow(!show);
  }
  return <>
  <button className='btn' onClick={settingShow}>
    Show/Hide
  </button>

  
  {show && <Item /> // T T : if show is true, then item will be rendered.
  }
  </>;
};

const Item=()=>{

  const [size, setSize] = useState(window.innerWidth);

  const checkSize=()=>{
    setSize(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener("resize", checkSize);
    //cleanup function
    return()=>{
      window.removeEventListener("resize", checkSize);
    }
  },[])


  return <div style={{marginTop:'2rem'}}>
    <h1>Window</h1>
    <h2>Size:{size} PX</h2>
  </div>
}
export default ShowHide;
