import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from '../asset/static/style.css'

/**
* @author
* @function Header
**/

export const Header = (props) => {
    return(
        <div className="background-home bg-transparent jumbotron-fluid p-0" > 
          <Container fluid={true}>
            <Row className="justify-content-center py-5">
              <Col md={8} sm={8}>
                {props.title && <h1 className="text-outline text-transparent display-1 font-weight-bolder">{props.title}</h1>}
                {props.subTitle && <h3 className="display-4 text-transparent">{props.subTitle}</h3>}
                {/* {props.text && <h3 className="lead font-weight-lighter ">{props.text}</h3>} */}
              </Col>
            </Row>
          </Container>
        </div>
       )

 }