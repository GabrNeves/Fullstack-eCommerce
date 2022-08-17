import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../global/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = () => {
    axios
      .get("http://localhost:9590/ptoducts")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products &&
        products.map((product: Product) => {
          return <div>{product.title}</div>;
        })}
    </div>
  );
}
