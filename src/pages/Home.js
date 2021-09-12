import React from 'react'
import { Content } from '../components/Content'
import { Header } from '../components/Header'


/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
    <div>
        <Header title = "this is title" subTitle = "subtitle" text = "text"/>
        <Content>
            
            <p>Content</p>
        </Content>
        
    </div>
   )

 }