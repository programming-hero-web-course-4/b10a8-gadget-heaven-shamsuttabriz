import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { addShoppingCart, getAllProducts } from "../utils";

export default function SingleCart({ product, choose, handleRemoveItem }) {
  const { product_title, description, product_image, price, product_id } =
    product;
  const handleChoose = (product) => {
    const cartProducts = getAllProducts("cart");
    cartProducts.push(product);
    addShoppingCart(cartProducts);
  };

  return (
    <div className="border-2 border-primary/30 flex flex-col lg:flex-row gap-5 p-3 bg-primary/10 mb-5 rounded-3xl">
      <img
        className="w-full object-cover lg:w-60 rounded-xl"
        src={product_image}
        alt={product_title}
      />
      <div className="flex justify-between bg-white w-full rounded-xl p-3">
        <div className="space-y-3">
          <h1 className="text-lg lg:text-2xl font-semibold">{product_title}</h1>
          <p className="text-secondary text-sm lg:text-lg">{description}</p>
          <p className="font-bold text-base lg:text-xl">Price: ${price}</p>
          <div>
            {choose == "Cart" || (
              <button
                onClick={() => {
                  handleChoose(product);
                }}
                className="flex items-center gap-3 duration-200 hover:bg-primary/90 bg-primary px-4 py-2 rounded-3xl font-bold text-white"
              >
                <span>Add To Cart</span>
                <span className="text-xl">
                  <MdOutlineShoppingCart />
                </span>
              </button>
            )}
          </div>
        </div>
        <button
          onClick={() => handleRemoveItem(product_id)}
          className="text-xl lg:text-2xl bg-red-500/20 border-2 border-red-500/50 rounded-full w-6 h-6 lg:w-9 lg:h-9 text-red-500/50 flex items-center justify-center"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}
