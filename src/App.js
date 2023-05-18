import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import  { UserProvider } from './store/context';
function App(){
  const localCart = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];
  const [cart,setCart] = useState(localCart);
  return (
    <UserProvider value={{cart,setCart}}>
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Product/>}/>
        </Routes>
    </div>
    </UserProvider>
  );
}
export default App;
