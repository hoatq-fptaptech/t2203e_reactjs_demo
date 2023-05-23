import React, { useReducer, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import INIT_STATE from './store/initState';
import  { UserProvider } from './store/context';
import reducer from './store/reducer';
function App(){
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  // const [cart,setCart] = useState(localCart);
  const [state,dispatch] = useReducer(reducer,localState);
  return (
    <UserProvider value={{state,dispatch}}>
      <div id='loading' style={{display:"none"}}></div>
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
