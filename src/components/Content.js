import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
/**
* @author
* @function Content
**/

export const Content = (props) => {
  const list = useSelector((state) => 
      state.cartReducer
  )
  useEffect(()=>{
    console.log("list: "+list);
  })
  const handleSetInput = () => {
      
  }
  return(
    <form className='d-inline-block w-card'>
        <img className='w-card-image' src={props.pic}/>
        <div className="w-card-title"> {props.title} </div>
        <div className="w-card-subtitle"> {props.description} </div>
        <input type="number" onChange={handleSetInput} />
        <button type="submit">Add to cart</button>
    </form>
    
   )

 }