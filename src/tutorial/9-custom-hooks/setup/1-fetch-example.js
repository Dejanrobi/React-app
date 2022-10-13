import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  //invoking the custom hook by obtainig the loading back and passing the url
  const { loading, products } = useFetch(url); 
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'Data'}</h2>
    </div>
  )
}



export default Example
