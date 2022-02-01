import { Search } from '@material-ui/icons';
import React from 'react'
import { Nav,Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/**
* @author
* @function Navigation
**/
const Container = styled.div`
  height: 60px;
  margin-top: 10px
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
  
`
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px
`
const Input = styled.input`
  border: none
`
const Logo = styled.h2`
  font-weight: bold;
  text-align: center;
`

export const Navigation = (props) => {
  return(
    <Container> 
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input/>
            <Search/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            YW Bakery
          </Logo>
        </Center>

        <Right>
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/cart">Cart</Link>
 
        </Right>
      </Wrapper>
    </Container>
   )

 }