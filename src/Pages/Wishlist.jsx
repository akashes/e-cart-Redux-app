import React from 'react'
import store from '../Redux/store'
import { addToWishlist, clearWishlist, removeFromWishlist } from '../Redux/Slices/WishlistSlice'
import {wishlistReducer} from '../Redux/store'
import { Row,Col } from 'react-bootstrap'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
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
import {  useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {  useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/Slices/CartSlice'
import { useNavigate } from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Wishlist() {
  const [basicModal, setBasicModal] = useState(false);
const navigate = useNavigate()
  const toggleOpen = () => setBasicModal(!basicModal);
  const dispatch= useDispatch()
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log("wishlistArray is",wishlistArray); 

  const handleRemoveFromWishlist=()=>{
    dispatch(clearWishlist())
    const toggleOpen = () => setBasicModal(!basicModal);
    navigate('/')


  }
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product))
    // navigate('/cart')

  }
  return (
    <div >
      <div className='d-flex justify-content-end'> 
      <button onClick={toggleOpen} className='btn btn-danger  me-5 mt-5'>Clear Wishlist</button>

      </div>
      <Row className='m-5 p-5'>
      {
        wishlistArray?.length>0 ? wishlistArray.map((product)=>{
          return(
            <Col className='mb-5 ' sm={12} md={4} lg={3} xl={3} >
              <MDBCard className='p-3' style={{width:'18rem'}}>
            <MDBCardImage className='border border-warning p-2' style={{width:'100%',height:'250px',objectFit:'cover'}} src={product.images?.[0]} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>{product.brand}</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <div className="buttons d-flex justify-content-around">
              <button onClick={()=>handleAddToCart(product)} className='btn btn-success'>
                {/* <RemoveShoppingCartIcon/> */}
                <ShoppingCartCheckoutIcon/>
              </button>
              <button onClick={()=>dispatch(removeFromWishlist(product))} className='btn btn-danger' ><DeleteOutlineIcon/></button>
              </div>
            </MDBCardBody>
          </MDBCard>
            </Col>

          )  
        }) : <>
        <p style={{height:'75vh'}} className='d-flex flex-column justify-content-center align-items-center text-danger' ><img src="https://media.tenor.com/RUMIrc0BPyEAAAAi/shopping-cart-shopping.gif" alt="" /> Your Wishlist is empty!!!</p>
           <Link className='text-center' style={{textDecoration:'none',color:'white'}}  to='/'>
            <button className='btn btn-success text-center '>Go Back to Home</button></Link>
        </>
      }
      </Row>
      <MDBModal  open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog 	size="sm">
          <MDBModalContent>
            <MDBModalHeader className='bg-danger'>
              <MDBModalTitle className=' text-white'>Are you sure to remove all Wishlist data</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            {/* <MDBModalBody>...</MDBModalBody> */}

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                No
              </MDBBtn>
              <MDBBtn onClick={()=>dispatch(removeFromWishlist())} >Yes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Wishlist
