import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header";
import { addShoppingCart } from "../utils";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(4);
  const data = useLoaderData();
  const { product_id } = useParams();

  useEffect(() => {
    const singleProduct = data.find(
      (product) => product.product_id === parseInt(product_id)
    );
    setProduct(singleProduct);
  }, [product_id, data]);

  console.log(product);

  const handleChoose = (choose, type) => {
    setProduct(choose);
    addShoppingCart(product, type);
  };

  return (
    <div className="relative z-0">
      {/* Header Section */}
      <div className="pb-56 bg-primary">
        <Header
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>
      {/* Details All Information */}
      <div className="border-4 border-primary/20 p-5 w-full lg:w-2/3 mx-auto my-6 rounded-2xl bg-white absolute top-44 left-1/2 -translate-x-2/4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex-1 lg:h-[450px]">
            <img
              className="rounded-xl h-full object-cover"
              src={product.product_image}
              alt="Product"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{product.product_title}</h1>
            <p className="font-medium text-secondary my-2">
              Price: ${product.price}
            </p>
            <div className="my-3 font-medium">
              {product.availability == true ? (
                <span className="bg-green-600/20 border-2 border-green-600/60 px-2 py-1 rounded-2xl">
                  {"In Stock"}
                </span>
              ) : (
                <span className="bg-red-600/20 border-2 border-red-600/60 px-2 py-1 rounded-2xl">
                  {"Stock Out"}
                </span>
              )}
            </div>
            <p className="text-secondary my-3 font-medium">
              {product.description}
            </p>
            <div>
              <p className="font-bold mb-1">Specification: </p>
              <div>
                {product.specifications?.map((s, i) => (
                  <div key={i} className="text-secondary font-medium mb-[2px]">
                    <span>{i + 1}.</span>
                    <span className="ml-2">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-3">
              <h1 className="font-bold mb-1">Rating: </h1>
              <div className="flex items-center gap-3">
                <p>
                  <Rating
                    style={{ maxWidth: 135 }}
                    value={rating}
                    onChange={setRating}
                  />
                </p>
                <p className="text-lg font-medium bg-slate-100 rounded-3xl">
                  <span className="p-3">{product.rating}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  handleChoose(product, "cart");
                }}
                className="flex items-center gap-3 duration-200 hover:bg-primary/90 bg-primary px-4 py-2 rounded-3xl font-bold text-white"
              >
                <span>Add To Cart</span>
                <span className="text-xl">
                  <MdOutlineShoppingCart />
                </span>
              </button>
              <button
                onClick={() => {
                  handleChoose(product, "wishlist");
                }}
                className="border border-primary bg-slate-100 duration-200 hover:bg-slate-200/90 rounded-full"
              >
                <p className="text-xl p-2 text-primary">
                  <FaRegHeart />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[650px] lg:h-96"></div>
    </div>
  );
}
