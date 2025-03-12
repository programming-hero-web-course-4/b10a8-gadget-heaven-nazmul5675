
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdDescription } from "react-icons/md";

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                const foundProduct = data.find(item => String(item.id) === id);
                setProduct(foundProduct);
            });
    }, [id]);

    if (!product) {
        return <h2 className="text-center text-red-500">Product not found</h2>;
    }

    return (
        <div>
            <div className="h-96 w-full bg-purple-500">
                <div className="text-center">
                    <h3 className="text-white text-4xl font-semibold mb-5">Product Details</h3>
                    <p className="text-white text-sm font-normal">
                        Explore the latest gadgets that will take your experience to the next level.
                    </p>
                </div>
            </div>
            <div className="w-1/2  justify-center items-center mx-auto relative -top-52">
                <div className="card card-side bg-base-100 shadow-sm">
                    <figure className="card-body">
                        <img src={product.image} alt={product.name} />
                    </figure>
                    <div className="">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.price}</p>
                        <p>{product.description}
                        </p>
                        <p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                        </p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
// Compare this snippet from src/components/Root/Root.jsx:
//