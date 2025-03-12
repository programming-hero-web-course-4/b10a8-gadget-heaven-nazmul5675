import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data.json') // Correct path to data.json
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4 p-4 py-28  w-10/12 mx-auto ">

            <div className="col-span-1 ">
                <div className="flex flex-col gap-5 p-10 bg-white rounded-xl shadow-md">
                    <button className="btn rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                        All Products
                    </button>
                    <button className="btn rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                        Category 1
                    </button>
                    <button className="btn rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                        Category 2
                    </button>
                    <button className="btn rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                        Category 3
                    </button>
                    <button className="btn rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                        Category 4
                    </button>
                </div>
            </div>


            <div className="col-span-3 bg-[#f3eaea] p-3 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                        <Product product={product} key={product.id} />))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;