import React, { useReducer, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import INIT_STATE from './store/initState';
import  { UserProvider } from './store/context';
import reducer from './store/reducer';
import Login from './pages/Login';
import Profile from './pages/Profile';
function App(){
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  // const [cart,setCart] = useState(localCart);
  const [state,dispatch] = useReducer(reducer,localState);
  const styles = {
    backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921)",
    width:"100%",
    height:"100%",
    position:"fixed",
    top:0,
    left:0,
    backgroundColor:"#000000",
    opacity:0.8,
    zIndex:100,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    display: state.isLoading?"block":"none"
  }
  return (
    <UserProvider value={{state,dispatch}}>
      <div id='loading' style={styles}></div>
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </div>
    </UserProvider>
  );
}
export default App;
