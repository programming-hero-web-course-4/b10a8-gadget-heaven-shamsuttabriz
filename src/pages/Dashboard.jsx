import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaSortAmountDownAlt } from "react-icons/fa";
import success from "../assets/success.png";
import Header from "../components/Header";
import SingleCart from "../components/SingleCart";
import { getAllProducts, removeProduct } from "../utils";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [choose, setChoose] = useState("Cart");

  useEffect(() => {
    const carts = getAllProducts("cart");
    setProducts(carts);
  }, []);

  const totalCost = [...products].reduce((acc, curr) => acc + curr.price, 0);

  const handleChoose = (type) => {
    if (type == "wishlist") {
      const wishlistProducts = getAllProducts("wishlist");
      setProducts(wishlistProducts);
      setChoose("Wishlist");
    } else {
      const cartProducts = getAllProducts("cart");
      setProducts(cartProducts);
      setChoose("Cart");
    }
  };

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const handleRemoveItem = (id) => {
    console.log("Removed Item", id);
    removeProduct(id);
    const carts = getAllProducts("carts");
    setProducts(carts);
    toast.success("Product removed successfully");
  };

  const handleClose = () => {
    localStorage.removeItem("cart");
    setProducts([]);
  };

  return (
    <div>
      <Helmet>
        <title>GadgetHavenTech | Dashboard</title>
      </Helmet>
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
            className={`border-2 border-slate-100 px-10 py-2 rounded-3xl text-white font-semibold`}
          >
            Cart
          </button>
          <button
            onClick={() => handleChoose("wishlist")}
            className={`border-2 border-slate-100 px-10 py-2 rounded-3xl text-white font-semibold`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="my-10 container mx-auto px-4 lg:px-10">
        {/* Dashboard Navbar */}
        <div className="flex flex-row justify-between my-10">
          <h1 className="text-xl lg:text-2xl font-semibold">{choose}</h1>
          <div>
            {choose == "Cart" ? (
              <div className="flex flex-col lg:flex-row items-end lg:items-center gap-3">
                <h2 className="text-xl lg:text-2xl font-semibold">
                  Total cost: ${totalCost.toFixed(2)}
                </h2>
                <button
                  onClick={handleSort}
                  className="btn btn-outline hover:bg-primary border border-primary hover:border-primary text-primary font-bold"
                >
                  <span>Sort By Price</span>
                  <span>
                    <FaSortAmountDownAlt />
                  </span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById("my_modal_5").showModal();
                  }}
                  className="btn btn-primary bg-primary text-white border border-primary hover:border-primary hover:bg-white hover:text-black duration-200"
                >
                  Purchase
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Show Cart Products */}
        <div>
          {products.map((product, idx) => (
            <SingleCart
              key={idx}
              product={product}
              choose={choose}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      </div>
      {/* Modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle text-center"
      >
        <div className="modal-box">
          <div>
            <img className="w-36 mx-auto" src={success} alt="Successfully" />
          </div>
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="py-4 text-secondary font-semibold">
            Thanks for purchasing.
          </p>
          <p className="text-secondary font-semibold">Total: ${totalCost}</p>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button onClick={handleClose} className="btn w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
