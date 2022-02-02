import React from 'react'
import { useSelector } from 'react-redux'

/**
* @author
* @function Cart
**/

export const Cart = (props) => {
  const list = useSelector((store) =>
    store.cartReducer
  )
  const mapList = list.map((item) => {
    return (
      <li>{item.type} : {item.quantity}</li>
    )
  })
  return(
    <div>
      <div>Cart</div>
      <ul>
        {mapList}
      </ul>
    </div>
    
   )
  }
