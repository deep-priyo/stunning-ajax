import React, {useEffect, useState} from 'react'
import Axios from "../utils/Axios.jsx";

const Show = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {

        Axios
            .get("/products")
            .then((products) => {
                console.log(products);
                setProducts(products.data);
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getProducts();
    },[])
    return (
        <>

                <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
                    <h1 className="text-4xl font-bold mb-8 text-gray-800">Product Management</h1>

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
                                Loading Products...
                            </h2>
                        )}
                    </ul>
                </div>
            </>

            )
            }
            export default Show
