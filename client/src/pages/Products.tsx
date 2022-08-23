import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../global/types";
import ProductsCard from '../components/ProductsCard'
import Box from "@mui/material/Box";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = () => {
    axios
      .get("http://localhost:9590/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Box sx={{margin: 'auto', justifyContent: 'center', alignItems:'center'}}>
        <ProductsCard products={products}/>
    </Box>
  );
}
