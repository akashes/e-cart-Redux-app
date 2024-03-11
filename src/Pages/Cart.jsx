import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import image from '../assets/cart.png'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCart, removeFromCart } from '../Redux/Slices/CartSlice';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { showSuccessAlert } from '../utils/toastify';


function Cart() {
  const dispatch = useDispatch()
  const[orderPlaced,setOrderPlaced]=useState(false)
  const[cartPrice,setCartPrice]=useState(0)
  const [showTable,setShowTable]=useState(false)
  const [basicModal, setBasicModal] = useState(false);
  const navigate = useNavigate()
    const toggleOpen = () => setBasicModal(!basicModal);
  const cart = useSelector((state)=>state.cart)
  console.log(cart);

  const handleClearCart=()=>{
    dispatch(clearCart())
    const toggleOpen = () => setBasicModal(!basicModal);
    navigate('/')

  }
  const totalCartPrice=(cart)=>{
    if(cart.length>0){
      setCartPrice(      cart.map((item)=>item.price).reduce((val,acc)=>val+acc)
      )
    }else{
      setCartPrice(0)
    }
  
    // const newCart = cart.map((product)=>{
    //   return product.price
    // })
    // if(newCart.length>0)
    // {
    //   newCart .reduce((item,acc)=>item+acc)
    //   console.log(newCart);
    //   setCartPrice(newCart)
    // }else{
    //   return 0
    // }
   
  }
  const handleCheckout=()=>{
    // showSuccessAlert("Order Placed Successfully")
    setOrderPlaced(true)
    dispatch(clearCart())

    setTimeout(()=>{
      navigate('/')

    },800)
  }
  useEffect(()=>{
    totalCartPrice(cart)

  },[cart])
  return (

    <div>
    {
      cart.length>0 ?   <Row >
      <Col   sm={12} md={8} lg={8} xl={8} >
        <div className='p-5'>
        <MDBTable hover className=' shadow-lg rounded'>
    <MDBTableHead>
      <tr>
        <th scope='col'>ID</th>
        <th scope='col'>NAME</th>
        <th scope='col'>IMAGE</th>
        <th scope='col'>PRICE</th>
        <th scope='col'>ACTION</th>

      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {
        cart?.length>0 ? cart.map((product,key)=>{
          return(
            <tr className=''>
            <th className='p-5' scope='row'>{key+1}</th>
            <td className='p-5'>{product.title}</td>
            <td><img style={{width:'100px',height:'100px',objectFit:'cover'}} src={product.images[0]} alt="" /></td>
            <td className='p-5'>₹{product.price}</td>
            <td className='p-5'><button onClick={()=>dispatch(removeFromCart(product))} className="btn"><i  className="fa-solid fa-trash text-danger " ></i></button></td>
          </tr>
          )
        }) : <p>""</p>
      }
   

    
     
    </MDBTableBody>
  </MDBTable>
        </div>
    
      </Col>
      <Col sm={12} md={3} lg={3} xl={3} >
        <div className='shadow-lg mt-5 p-5 '>
          <h3 className='text-center mt-4 fw-bold'>Cart Summary</h3>
          <h4>Total Cart Items : <span className='text-warning fw-bold'>{cart.length}</span> </h4>
          <h4>Total Price : <span className='text-warning fw-bold'> {cartPrice}</span> </h4>
          <div className='text-center'>
          <button onClick={handleCheckout} className="btn btn-success mt-4 ">CheckOut</button>

          </div>
        </div>
      </Col>
    </Row> : <>
    {
      orderPlaced ? <div style={{width:'100vw',height:'80vh'}} className='d-flex justify-content-center align-items-center '><img src={'https://www.primehairdepot.com/images/order_success_placed.gif'} alt="" /></div> : <><p style={{height:'75vh'}} className='d-flex flex-column justify-content-center align-items-center text-danger' ><img src="https://media.tenor.com/RUMIrc0BPyEAAAAi/shopping-cart-shopping.gif" alt="" /> Your Cart is empty!!!</p>
      <Link className='d-flex justify-content-center' style={{textDecoration:'none',color:'white'}}  to='/'>
 
       <button className='btn btn-success '>Go Back to Home</button></Link></>

    }
       
            
        </>
    }
    </div>


    // <div>
    //   <div className='d-flex justify-content-end'> 
    //   <button onClick={toggleOpen} className='btn btn-danger  me-5 mt-5'>Clear Cart</button>


    //   </div>
    //   <Row className='m-5 p-5'>
    //   {
    //     cart?.length>0 ? cart.map((product)=>{
    //       return(
    //         <Col className='mb-5 ' sm={12} md={4} lg={3} xl={3} >
    //           <MDBCard className='p-3' style={{maxWidth:'18rem'}}>
    //         <MDBCardImage className='border border-warning p-2' style={{width:'100%',height:'250px',objectFit:'cover'}} src={product.images?.[0]} position='top' alt='...' />
    //         <MDBCardBody>
    //           <MDBCardTitle>{product.brand}</MDBCardTitle>
    //           <MDBCardText>
    //             Some quick example text to build on the card title and make up the bulk of the card's content.
    //           </MDBCardText>
    //           <div className="buttons d-flex justify-content-around">
    //           <button className='btn btn-success'><i className="fa-solid fa-heart"></i></button>
    //           <button className='btn btn-danger' ><div className="fa solid fa-cart-plus"></div></button>
    //           </div>
    //         </MDBCardBody>
    //       </MDBCard>
    //         </Col>

    //       )  
    //     }) : <h1 className='text-center text-danger'>loading....</h1>
    //   }
    //   </Row>
    //   <MDBModal  open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
    //     <MDBModalDialog 	size="sm">
    //       <MDBModalContent>
    //         <MDBModalHeader className='bg-danger'>
    //           <MDBModalTitle className=' text-white'>Are you sure to remove all Wishlist data</MDBModalTitle>
    //           <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
    //         </MDBModalHeader>
    //         {/* <MDBModalBody>...</MDBModalBody> */}

    //         <MDBModalFooter>
    //           <MDBBtn color='secondary' onClick={toggleOpen}>
    //             No
    //           </MDBBtn>
    //           <MDBBtn onClick={handleClearCart} >Yes</MDBBtn>
    //         </MDBModalFooter>
    //       </MDBModalContent>
    //     </MDBModalDialog>
    //   </MDBModal>
    // </div>
  )
}

export default Cart
