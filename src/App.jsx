import axios from "axios";

const App = () => {

    const getProducts = () =>
    {
        const api = "https://fakestoreapi.com/products";
        axios.get(api).then(products => {
            console.log(products);
        }).catch(error => console.log(error))
    }
    return (
        <div className="">

            <button onClick={()=>(getProducts())} className="px-5 py-2 bg-red-300 rounded">Call Product Api</button>
        </div>
    )
}
export default App
