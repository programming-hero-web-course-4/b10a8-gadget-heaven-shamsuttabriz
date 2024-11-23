import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { product_title, product_image, price, product_id } = product;
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img src={product_image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-center">
            <h2 className="card-title">{product_title}</h2>
            <p className="font-medium">Price: ${price}</p>
            <div className="mt-6">
              <Link
                to={`/product/${product_id}`}
                className="btn-outline duration-200 hover:bg-primary border-2 border-primary hover:border-primary px-3 py-1 rounded-md"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
