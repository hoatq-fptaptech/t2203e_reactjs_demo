import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { find } from "../services/product.service";
import UserContext from "../store/context";

const Product = (props)=>{
    const [product,setProduct] = useState({});
    const {id} = useParams();
    const {count,setCount} = useContext(UserContext);
    const findProduct = async ()=>{
        const p = await find(id);
        setProduct(p);
    }
    useEffect(()=>{
        findProduct();
    },[]);
    const upCount = ()=>{
        setCount(count+1);
    }
    return (
        <section>
          <div className='container'>
              <div className="row">
                <div className="col">
                    <img src={product.thumbnail}/>
                </div>
                <div className="col">
                    <h1>Count: {count}</h1>
                    <h1>{product.title}</h1>
                    <button type="button" onClick={upCount} className="btn btn-primary">Add to cart</button>
                </div>
              </div>
                    
            </div>
        </section>
    );
}

export default Product;