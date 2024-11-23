import { useEffect, useState } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import Header from "../components/Header";
import SingleCart from "../components/SingleCart";
import { getAllProducts } from "../utils";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [choose, setChoose] = useState("Cart");

  useEffect(() => {
    const carts = getAllProducts("cart");
    setProducts(carts);
  }, []);

  const handleChoose = (type) => {
    if (type == "wishlist") {
      const wishlistProducts = getAllProducts("wishlist");
      console.log(wishlistProducts);
      setProducts(wishlistProducts);
      setChoose("Wishlist");
    } else {
      const cartProducts = getAllProducts("cart");
      console.log(cartProducts);
      setProducts(cartProducts);
      setChoose("Cart");
    }
  };

  return (
    <div>
      <div className="bg-primary">
        <div>
          <Header
            title="Dashboard"
            subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          />
        </div>
        <div className="flex gap-5 justify-center items-center pb-12">
          <button
            onClick={() => handleChoose("cart")}
            className={`border-2  border-slate-100 px-10 py-2 rounded-3xl text-white font-semibold}`}
          >
            Cart
          </button>
          <button
            onClick={() => handleChoose("wishlist")}
            className={`border-2  border-slate-100 px-10 py-2 rounded-3xl text-white font-semibold}`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="my-10 container mx-auto px-4 lg:px-10">
        {/* Dashboard Navbar */}
        <div className="flex flex-row justify-between my-10">
          <h1 className="text-xl lg:text-2xl font-semibold">{choose}</h1>
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-3">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Total cost: $877.4
            </h2>
            <button className="btn btn-outline hover:bg-primary border border-primary hover:border-primary text-primary font-bold">
              <span>Sort By Price</span>
              <span>
                <FaSortAmountDownAlt />
              </span>
            </button>
            <button className="btn btn-primary bg-primary text-white border border-primary hover:border-primary hover:bg-white hover:text-black duration-200">
              Purchase
            </button>
          </div>
        </div>
        {/* Show Cart Products */}
        <div>
          {products.map((product, idx) => (
            <SingleCart key={idx} product={product} choose={choose} />
          ))}
        </div>
      </div>
    </div>
  );
}
