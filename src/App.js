import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<PageNotFound/>} />

    </Routes>


<ToastContainer autoClose={2000} />

    </>
  );
}

export default App;
