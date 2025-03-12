import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {

    const { id, title, image, category, price, description, available, rating, brand, specs } = product;

    const navigate = useNavigate();

    const handleDetailClick = (id) => {
        navigate(`/details/${id}`);


    }

    return (
        <div className="">

            <div className="card bg-base-100 w-[23rem] h-[26rem] shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl bg-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Price {price} k</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleDetailClick(id)}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;