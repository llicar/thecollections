import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../src/pages/home'
import { Explorer } from '../src/pages/explorer'
import Product from './pages/product'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartComponent from './pages/cart';
import Checkout from './pages/checkout/checkout';
import Thankyou from './pages/thankyou';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <ToastContainer position={'top-center'} autoClose={2000} hideProgressBar={true} transition={Slide} />
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/explorer" element={<Explorer />} ></Route>
                <Route path="/product/:id" element={<Product />} ></Route>
                <Route path="/cart" element={<CartComponent />} ></Route>
                <Route path="/checkout" element={<Checkout />} ></Route>
                <Route path="/thankyou" element={<Thankyou />} ></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes