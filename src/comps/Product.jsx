import React from 'react'
import discount from '../assets/discount.png'
import favorite from '../assets/favorite.png'
import './product.css'
function Product(props) {

  
  return (
    <div  className='product' onClick={ () => props.hi(props.name)}>
        
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla sit enim omnis odit?</p>
        <h1 className='price'>{props.price} $</h1>
        <img className='i-image' src={props.image} alt="" />
        <div className="additional">

        <div className="fav">
          <img src={favorite} alt="" />
          ADD TO FAVOUTITE
        </div>

        <div className="dis">
          <img src={discount} alt="" />
          DISCOUNT RATE : {props.discount}
        </div>

        </div>

    </div>
  )
}

export default Product