import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllProducts } from "../utils";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const carts = getAllProducts("cart");
    setProducts(carts);
  }, []);

  const handleChoose = (type) => {
    if (type == "wishlist") {
      const wishlistProducts = getAllProducts("wishlist");
      console.log(wishlistProducts);
      setProducts(wishlistProducts);
    } else {
      const cartProducts = getAllProducts("cart");
      console.log(cartProducts);
      setProducts(cartProducts);
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

      <div className="my-10">
        <h1 className="text-5xl text-center">Product: {products.length}</h1>
      </div>
    </div>
  );
}
