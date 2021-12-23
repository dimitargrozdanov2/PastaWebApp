import { useState, useEffect } from 'react'
import app from "../../firebase.js";

function AllProducts () {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({});


    useEffect(() => {
        const fetchData = () => {
            const db = app.firestore()
            const data = db.collection("products").get()
            setProducts(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [newProduct])


    const onCreate = () => {
        const db = app.firestore();
        db.collection("products").add({ name: newProduct });
      };

      
    return (
        <ul> 
        <input
        value={newProduct}
        onChange={e => setNewProduct(e.target.value)}
        // in separate function and we could console.log why it
        // 
      />
      <button onClick={onCreate}>Create</button>
      {products.map(product => (
        <li key={product.name}>{product.name}
        </li>
      ))}
    </ul>
    )
}

export default AllProducts;