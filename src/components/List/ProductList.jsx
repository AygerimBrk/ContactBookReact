import React from "react";
import ProductCard from "../Card/ProductCard";

const ProductList = ({ products, handleDelete, handleEdit }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "30px" }}>
        Information about our clients
      </center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
