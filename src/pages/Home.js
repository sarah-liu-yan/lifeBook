import React from 'react'
import { Content } from '../components/Content'
import { Header } from '../components/Header'
import strawberry from '../asset/static/images/strawberry.jpeg'
import ube from '../asset/static/images/ube.jpeg'
import banana from '../asset/static/images/banana.jpeg'
import { Container, Row } from 'react-bootstrap'


/**
* @author
* @function Home
**/

export const Home = (props) => {
  const dummyArr = [
    {
    "title" : "Strawberry Donut",
    "description" : "24 hr raised brioche, sugar coated, filled with strawberry mascarpone cream and diced fresh strawberries.",
    "pic" : strawberry
  },
  {
    "title" : "Ube Donut",
    "description" : "24 hr raised brioche, sugar coated and filled with ube cream.",
    "pic" : ube
  },
  {
    "title" : "Banana Donut",
    "description" : "24 hr raised brioche, sugar coated and filled with banana cream, topped with shaved chocolate.",
    "pic" : banana
  }
] 
  const handlePosts = () =>{
    return dummyArr.map((item,key) => {
      return(
        <Content key={key} title={item.title} description={item.description} pic={item.pic} />
      )
    })
  }
  return(
    <div>
        <Header title = "YW Bakery" subTitle = "Baking your ideas for life" text = "text"/>
        <Container fluid={true}>
          <Row className="justify-content-around">
            {handlePosts()}
          </Row>
        </Container>
        
        
    </div>
   )

 }