import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/actions';

/**
* @author
* @function Cart
**/

export const Cart = (props) => {
  const list = useSelector((store) =>
    store.cartReducer
  )
  const dispatch = useDispatch();
  const {addItem, reduceItem} = bindActionCreators(
    actionCreators,
    dispatch
)
  
  const mapList = list.map((item, key) => {
    const handleIncrease = (e) =>{
      addItem({
        quantity:1,
        name:item.name,
        position: key
      })
    }
    const handleDecrease = (e) =>{
      reduceItem({
        name:item.name,
        position: key
      })
    }
    if(item !== null){
      return (
        <li key={key}>{item.name} : {item.quantity} <button onClick={handleIncrease} >+</button><button onClick={handleDecrease} >-</button> </li>
      )
    }
    
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
