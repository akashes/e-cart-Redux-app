import React from 'react'
import './Home.css'
import { Row,Col } from 'react-bootstrap'
import image from '../assets/cart.png'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useFetch } from '../Hooks/useFetch'
import { UseDispatch, useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import { useRef } from 'react';



const  Home=()=> {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const splitDesc=(val,limit)=>{
    if(val.split(" ").length>limit){
       return val.split(" ").slice(0,limit).join(" ")+"...."
    }else{
        return val
    }
}
const handleAddToCart=(product)=>{
  if(wishlist.find((item)=>item.id===product.id)){
    showFailedAlert('product already exists in wishlist')
  }else{
    dispatch(addToWishlist(product))

  }

}
  const sectionRef = useRef(null)
  const num = useRef(0)
  console.log('num is ',num);
  const dispatch = useDispatch()
  const {data,error,loading} = useFetch('https://dummyjson.com/products')
  console.log(data);
  console.log(loading); 
  return (
    <div className='home' >
      <h1  className='main-heading text-center pt-5'>Shop Your Favorites!!! </h1>
      <Row className='mt-3 pb-5   ' style={{minHeight:'74vh'}} >
        <Col className='d-flex flex-column justify-content-center' sm={12} md={6} lg={3} xl={4}>
          <h2  className='ms-5'>Discover Your Perfect Style at Our Online Store</h2>
         
          <p className='ms-5' style={{marginBottom:'130px'}}>your one-stop destination for cutting-edge gadgets and devices. Explore our vast selection of the latest smartphones, laptops, tablets, and more, all from top brands you trust. </p>
          <button onClick={()=>sectionRef.current.scrollIntoView({behaviour:"smooth"})} style={{width:'200px'}} className="btn btn-warning mx-auto">Shop now</button>
          </Col>

        <Col d-flex flex-column justify-content-center sm={12} md={6} lg={8} xl={8}  ><img  className='mt-5 hero-image' src='https://www.newgenmax.com/wp-content/uploads/2018/07/Ecommerce-Banner-1.jpg' alt="" /></Col>
      </Row>
      <Row ref={sectionRef} className="cards p-5"> 
      {
        !loading ? data.map((product)=>{
          return(
            <Col className='mb-5 ' sm={12} md={4} lg={3} xl={3} >
              <MDBCard className='p-3 rounded shadow-lg  ' style={{maxWidth:'18rem',maxHeight:'30rem'}}>
            <MDBCardImage className='border border-warning p-2'  style={{width:'100%',height:'250px',objectFit:'cover'}} src={product.images?.[0]} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>{product.brand}</MDBCardTitle>
              <MDBCardText>
                {splitDesc( product.description,12)} 

              </MDBCardText>
              <div className="buttons d-flex justify-content-around">
              <button onClick={()=>handleAddToCart(product)} className='btn btn-danger'><i className="fa-solid fa-heart"></i></button>
              <button onClick={()=>dispatch(addToCart(product))} className='btn btn-success' ><div className="fa solid fa-cart-plus"></div></button>
              </div>
            </MDBCardBody>
          </MDBCard>
            </Col>

          )  
        }) : <h1 className='text-center text-danger'>loading....</h1>
      }
    
      </Row>
      <Footer/>

    </div>
  )
}
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/Slices/WishlistSlice';
import { addToCart } from '../Redux/Slices/CartSlice';
import { showFailedAlert } from '../utils/toastify';

export default Home
