import React, { useState } from "react";
import AddProduct from "./components/Add/AddProduct";
import EditProduct from "./components/Edit/EditProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/List/ProductList";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState([]);
  function handleAddProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  }
  function handleAddProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  }

  console.log(products);

  function handleDelete(id) {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  }
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);
  const [editProduct, setEditProduct] = useState({});

  function handleEdit(id) {
    let obj = products.filter((item) => item.id == id);
    setEditProduct(obj[0]);
    handleEditShow();
  }
  function handleSave(editedObj) {
    let newProducts = products.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });
    setProducts(newProducts);
    setShowEditModal(false);
  }

  return (
    <div>
      <Header handleShow={handleShow} />
      <AddProduct
        handleAddProduct={handleAddProduct}
        show={show}
        handleClose={handleClose}
      />
      <ProductList
        products={products}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <EditProduct
        showEditModal={showEditModal}
        handleEditClose={handleEditClose}
        editProduct={editProduct}
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;
