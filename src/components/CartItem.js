import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/actions';

/**
* @author
* @function CartItem
**/

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const {addItem, reduceItem, deleteItem} = bindActionCreators(
    actionCreators,
    dispatch
  )
  const handleIncrease = () =>{
    addItem({
      quantity:1,
      name:props.name,
    })
  }
  const handleDecrease = () =>{
    console.log("Cart Decrease : "+props.name)
    reduceItem({
      name:props.name,
    })
  }
  const handleDelete = () =>{
    console.log("Cart Delete : "+props.name)
    deleteItem({
      name:props.name,
    })
  }
  return(
    <div>
        {props.name}
        {props.quantity}
        
        <img alt={props.name} className='w-card-image' src={props.pic}/>
        <button onClick={handleIncrease} >+</button>
        <button onClick={handleDecrease} >-</button> 
        <button onClick={handleDelete} >x</button> 
    </div>
   )

 }