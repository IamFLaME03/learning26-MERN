import axios from 'axios';
import React, { useState } from 'react'


export const Apidemo2 = () => {
      const [products, setproducts] = useState([])
      const getProducts = async () => {
         const response = await axios.get("https://dummyjson.com/products");
         console.log(response.data.products);

         setproducts(response.data.products)
         
      }


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Apidemo2</h1>
      <button onClick={getProducts}>Get</button>
      <table className='table table-danger'>
         <thead>
            <tr>
               <th>Title</th>
               <th>Brand</th>
               <th>Category</th>
               <th>Image</th>
               <th>Price</th>
               <th>Rating</th>
               <th>Return Policy</th>
               <th>Stock</th>
            </tr>
         </thead>
         <tbody>
            {
               products.map((product) => {
                  return <tr>
                     <td>{product.title}</td>
                     <td>{product.brand}</td>
                     <td>{product.category}</td>
                     <td> <img src={product.thumbnail} alt={product.title} width="100" /></td>
                     <td>{product.price}</td>
                     <td>{product.rating}</td>
                     <td>{product.returnPolicy}</td>
                     <td>{product.stock}</td>
                  </tr>
               })
            }
         </tbody>
      </table>
    </div>
  )
}
