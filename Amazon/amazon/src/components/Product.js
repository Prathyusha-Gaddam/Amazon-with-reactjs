import React from 'react'
import './Product.css';

function Product(props) {
  return (
    <div>
      <div className='product'>
        <div className='product-image'>
            <img src={props.definition.image}/>
        </div>
        <div className='product-name'>
            {props.definition.name}
        </div>
        <div className='product-rating'>
            {props.definition.rating}
        </div>
        <div className='product-price'>
            {props.definition.price}
        </div>
      </div>
    </div>
  )
}

export default Product
