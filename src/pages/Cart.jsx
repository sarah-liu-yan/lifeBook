import React from 'react'
import { Container, Row } from 'react-bootstrap';
import {  useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem';
import { Header } from '../components/Header';

/**
* @author
* @function Cart
**/

export const Cart = (props) => {
  const list = useSelector((store) =>
    store.cartReducer
  )

  const mapList = list.map((item, key) => {
    console.log("cart item :")
    console.log(item)
    if(item !== null){
      return (
          <CartItem key={key} name = {item.name} quantity = {item.quantity} pic = {item.pic} />
      )
    }
    return null
  })
  return(
    <div>
      <Header title = "Your Cart" subTitle = "Enjoy!" />
      <Container fluid={true}>
        <Row className="justify-content-around">
          {mapList}
        </Row>
      </Container>
    </div>
    
   )
  }
