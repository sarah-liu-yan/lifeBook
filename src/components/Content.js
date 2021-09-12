import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

/**
* @author
* @function Content
**/

export const Content = (props) => {
  return(
    <div>
        <Container fluid={true}>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    </div>
   )

 }