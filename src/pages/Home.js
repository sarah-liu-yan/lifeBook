import React from 'react'
import { Content } from '../components/Content'
import { Header } from '../components/Header'


/**
* @author
* @function Home
**/

export const Home = (props) => {
  const dummyArr = [
    {
    "userName" : "Sarah",
    "post" : "I am Sarah"
  },
  {
    "userName" : "Sam",
    "post" : "I am Sam"
  },
  {
    "userName" : "Anson",
    "post" : "I am Anson"
  }
] 
  const handlePosts = () =>{
    return dummyArr.map(item => {
      return(
        <li>{item.userName} : {item.post}</li>
      )
    })
  }
  return(
    <div>
        <Header title = "this is title" subTitle = "subtitle" text = "text"/>
        <Content>
            <p>This is the home page</p>
        </Content>
    <ul>
      {handlePosts()}
    </ul>
        
    </div>
   )

 }