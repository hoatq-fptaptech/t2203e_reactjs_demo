import React, { useContext, useEffect, useState } from "react";
import { get4P } from "../services/product.service";
import UserContext from "../store/context";

function Cart(props){
    const [products,setProducts] = useState([]);
    const {cart,setCart} = useContext(UserContext);
    const getProducts = ()=>{
        console.log(cart);
        setProducts(cart);
    }
    useEffect(()=>{

    }); // component did update
    useEffect(()=>{
        getProducts();
    },[]); // component did mount
    useEffect(()=>{

    },[products]);// run when products updated
    return (
        <section>
            <div className="container">
                <h1>Cart</h1>
                <table className="table">
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        {
                            products.map((e,k)=>{
                                return (
                                    <tr key={k}>
                                        <td><img src={e.thumbnail} width={120} className="img-thumbnail"/></td>    
                                        <td>{e.title}</td>    
                                        <td>{e.price}</td>    
                                        <td>{e.buy_qty}</td>    
                                        <td>{e.price * e.buy_qty}</td>    
                                    </tr>
                                    )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Cart;