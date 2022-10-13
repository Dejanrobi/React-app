import React from 'react';

//SETTING THE PROP TYPES
import PropTypes from 'prop-types';
//Importing a default image
import defaultImage from '../../../assets/default-image.jpeg'
//the products are passed as props while rendering the product component in the index.js
//we can acess them from the spread 

const Product = ({image, name, price}) => {
  //if image is true, then return image.url
  const url = image && image.url;
  //checking if each item is passed
  //some items have undefined returns
  console.log(image, name, price)
  return <article className='product'>
    {/**
     * 
     *<img src={image.url} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p>
     */}
    
    <img src={url|| defaultImage} alt={name} />
    <h4>{name}</h4>
    <p>${price || 3.99}</p>
  </article>;
};

Product.prototype={
  //we want these items to yell and scream incase one of them is missing
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,  
  price:PropTypes.number.isRequired  

}

//setting default props incase a value is missing to avoid any errors
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage
// }

export default Product;
