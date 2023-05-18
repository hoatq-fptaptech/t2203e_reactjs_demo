import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { find } from "../services/product.service";
import UserContext from "../store/context";

const Product = (props)=>{
    const [product,setProduct] = useState({});
    const [buyQty,setBuyQty] = useState(1);
    const {id} = useParams();
    const {cart,setCart} = useContext(UserContext);
    const findProduct = async ()=>{
        const p = await find(id);
        setProduct(p);
    }
    useEffect(()=>{
        findProduct();
    },[]);
    const addToCart = ()=>{
       if(product.id){
            let check = false;
            cart.map(e=>{
                if(e.id == product.id){
                    e.buy_qty = e.buy_qty+buyQty;  
                    check = true;   
                }
                return e;
            })
            if(!check){
                product.buy_qty = buyQty;
                cart.push(product);
            }
            localStorage.setItem("cart",JSON.stringify(cart));
            setCart(cart);
            alert("Đã thêm sản phẩm vào giỏ hàng");
       }
    }
    return (
        <section>
          <div className='container'>
              <div className="row">
                <div className="col">
                    <img src={product.thumbnail}/>
                </div>
                <div className="col">
                    <h1>{product.title}</h1>
                    <button type="button" className="btn btn-primary">Like</button>&nbsp;
                    <button type="button" onClick={addToCart} className="btn btn-primary">Add to cart</button>
                </div>
              </div>
                    
            </div>
        </section>
    );
}

export default Product;