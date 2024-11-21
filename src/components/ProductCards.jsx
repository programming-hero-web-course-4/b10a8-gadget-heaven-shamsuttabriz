import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductCards() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (data) => data.category === category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        //  Single product card
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
}
