import React, {useState} from 'react'
import axios from "axios";

const Show = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const api = "https://fakestoreapi.com/products";
        axios
            .get(api)
            .then((products) => {
                console.log(products);
                setProducts(products.data);
            })
            .catch((error) => console.log(error));
    };
    return (
        <>

                <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
                    <h1 className="text-4xl font-bold mb-8 text-gray-800">Product Management</h1>
                    <button
                        onClick={getProducts}
                        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow hover:bg-blue-600 transition"
                    >
                        Load Products
                    </button>
                    <hr/>
                    <ul className="w-3/4">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <li
                                    key={product.id}
                                    className="p-4 bg-white shadow-sm rounded-lg mb-4 text-gray-800 hover:shadow-lg transition"
                                >
                                    {product.title}
                                </li>
                            ))
                        ) : (
                            <h2 className="text-gray-500 text-xl text-center mt-5">
                                Click "Load Products" to fetch data...
                            </h2>
                        )}
                    </ul>
                </div>
            </>

            )
            }
            export default Show
