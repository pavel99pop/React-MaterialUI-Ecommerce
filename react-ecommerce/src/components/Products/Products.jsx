import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$120",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg?auto=webp&quality=75&width=1024",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "$1500",
    image:
      "https://www.mytrendyphone.eu/images/Artwizz-Clear-Clip-Hard-Shell-Case-for-MacBook-Air-13-Transparent-4260598448202-30092019-01-p.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
