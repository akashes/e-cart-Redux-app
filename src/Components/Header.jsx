import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
    MDBBadge
  } from 'mdb-react-ui-kit';
  
import { useSelector } from 'react-redux';

function Header() {
    const [openNavSecond, setOpenNavSecond] = useState(false);
    const value = useSelector((state)=>state.wishlistReducer)
    const cartArray = useSelector((state)=>state.cart)
    console.log('new wishlist length',value.length);
    console.log(cartArray);
 
  return (
 <>
    <MDBNavbar style={{position:'sticky',top:'0' ,zIndex:'999',background:'black'}} expand='lg' light  className='shadow-none'>
    <MDBContainer fluid>
      <Link style={{textDecoration:'none',fontWeight:'bolder',color:'white'}} to='/'>
      <MDBNavbarBrand className='ms-3' style={{color:'white'}}>Code Cart <i className="fa-solid fa-cart-plus"></i> </MDBNavbarBrand>
</Link>
      <MDBNavbarToggler
      style={{color:'white'}}
        aria-expanded='false' 
        aria-label='Toggle navigation'
        onClick={() => setOpenNavSecond(!openNavSecond)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler> 
      <MDBCollapse navbar open={openNavSecond}>

        <MDBNavbarNav className="justify-content-end gap-2" style={{ width: "100%" }} >
  


            <MDBNavbarLink  className='text-light btn btn-outline-danger border'>
                <Link  className='d-flex align-items-center justify-content-center'  style={{textDecoration:'none',fontWeight:'bolder',color:'white'}} to='/wishlist'>
                    <i className="fa-solid fa-heart text-danger me-1"></i>
                    Wishlist
                     {/* <Badge className='ms-1' bg="secondary">{wishlist.length}</Badge> */}
                     <MDBBadge className='ms-1' color='secondary'>
        {value.length}
      </MDBBadge>
                    
                    </Link>
            </MDBNavbarLink>
                   
<MDBNavbarLink className='text-light d-flex justify-content-center align-items-center gap-1 btn btn-outline-success border me-3 '>
                <i  className='fa-solid fa-cart-shopping text-success'></i>
                <Link  style={{textDecoration:'none',fontWeight:'bolder',color:'white'}} to='/cart'>Cart</Link>
                                     {/* <Badge className='ms-1' bg="secondary">{cart.length}</Badge> */}
                                     <MDBBadge className='ms-1' color='secondary'>
        {cartArray.length}
      </MDBBadge>

            </MDBNavbarLink>aaaaaaaaa
          
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  
 </>
  )
}

export default Header
