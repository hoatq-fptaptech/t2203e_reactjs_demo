import React, { useEffect, useState } from 'react';
import { get } from './../services/product.service'; 
import { NavLink } from 'react-router-dom';
function Home(props){
  const [products,setProducts] = useState([]);
  const getProducts = async ()=>{
      const products = await get();
      setProducts(products);
  }
  useEffect(()=>{
    getProducts();
  },[])

  return (
      <section>
          <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <h2>Danh mục sản phẩm</h2>
                    <ul>
                        <li>Watch</li>
                        <li>Fashion</li>
                    </ul>
                </div>
                <div className='col'>
                <h1>Danh sách sản phẩm</h1>
              <div className='row'>
              {
                  products.map((e,k)=>{
                  return (
                      <div key={k} className='col-3'>
                      <div className="card">
                          <img src={e.thumbnail} className="card-img-top" alt="..." />
                          <div className="card-body">
                          <h5 className="card-title">{e.title}</h5>
                          <p className="card-text">{e.description}</p>
                          <span className='text-danger'>{e.price}</span>
                          <NavLink to={"/product/"+e.id} className="btn btn-primary">Buy</NavLink>
                          </div>
                      </div>
                      </div>
                  )
                  })
              }
              </div>
                </div>
            </div>
              
          </div>
      </section>
  );
  
}

export default Home;
