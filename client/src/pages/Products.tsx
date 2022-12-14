import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../global/types";
import ProductsCard from '../components/ProductsCard'
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";

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
    <div>
      <Box sx={{margin: 'auto', justifyContent: 'center', alignItems:'center', maxWidth:'1500px', border: 'none'}}>
          <ProductsCard products={products}/>
      </Box>
    </div>
  );
}
