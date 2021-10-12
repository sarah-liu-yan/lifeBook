import React from 'react'
import { Content } from '../components/Content'
import { Header } from '../components/Header'


/**
* @author
* @function Home
**/

export const Home = (props) => {
  const dummyObj = [
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

  }
  return(
    <div>
        <Header title = "this is title" subTitle = "subtitle" text = "text"/>
        <Content>
            
            <p>Content</p>
        </Content>

        
    </div>
   )

 }