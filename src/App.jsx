import axios from "axios";
import {useState} from "react";

const App = () => {
    const [products, setProducts] = useState([])

    const getProducts = () =>
    {
        const api = "https://fakestoreapi.com/products";
        axios.get(api).then(products => {
            console.log(products);
            setProducts(products.data)
        }).catch(error => console.log(error))
    }
    const addProducts = () =>
    {
        const api = "https://fakestoreapi.com/products";
        axios.post(api,{ title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'}).then(response => {
            console.log(response);
        }).catch(error => console.log(error))
    }
    return (
        <div className="">

            <button onClick={() => (getProducts())} className="px-5 py-2 bg-red-300 rounded">Call Product Api</button>
            <br/><br/>
            <button onClick={() => (addProducts())} className="px-5 py-2 mt-5 bg-red-300 rounded">Add Product Api</button>
            <hr className="my-10"/>
            <ul>
                {products.length>0?(products.map(product => (<li className=" p-5 bg-red-200 rounded mt-1">{product.title}</li>))):(<h1>Click to load product....</h1>)}

            </ul>
        </div>
    )
}
export default App
