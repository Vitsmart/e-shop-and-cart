import React from 'react'
import {Container, Nav, Button, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink } from "react-router-dom"
import { useShoppingCart } from '../context/shoppingCartContext'

export const Navbar = () => {

const { openCart, cartQuantity} = useShoppingCart()




  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
Navigation

<Nav className='ne-auto'>
   <Nav.Link to="/" as = {NavLink}>
Home
    </Nav.Link>
    <Nav.Link to="/about" as = {NavLink}>
About
    </Nav.Link>

    <Nav.Link to="/store" as = {NavLink}>
Store
    </Nav.Link>
        
    
</Nav>
{cartQuantity > 0 && (
<Button onClick={openCart} style={{ width: "3rem", height:"3rem", position:"relative"}} variant="outline-primary" className='rounded-circle'>
<img style={{ height:"2rem", width:"2rem", }} src="../../images/cart.png" alt="cartbox" />
<div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
style={{ 
    color:"white", 
    width:"1.5rem", 
    height:"1.5rem", 
    position:"absolute", 
    bottom:0,
     right:0,
     transform: "translate(25%, 25%)"
}}>{cartQuantity}</div>
</Button>
)}
        </Container>

    </NavbarBs>
  )
}
