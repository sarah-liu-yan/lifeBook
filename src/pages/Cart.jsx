import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { CartItem } from '../components/CartItem';
import { Header } from '../components/Header';
import { actionCreators } from '../store/actions';

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
          <CartItem key={item.id} name = {item.name} quantity = {item.quantity} pic = {item.pic} />
      )
    }
    
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
