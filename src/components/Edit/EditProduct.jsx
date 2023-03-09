import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditProduct({
  handleEditClose,
  showEditModal,
  editProduct,
  handleSave,
}) {
  const [productToEdit, setProductToEdit] = useState(editProduct);
  //   console.log(editProduct);

  useEffect(() => {
    setProductToEdit(editProduct);
  }, [editProduct]);

  const editName = (e) => {
    let newObj = { ...productToEdit, name: e.target.value };
    setProductToEdit(newObj);
  };
  const editSurName = (e) => {
    let newObj = { ...productToEdit, surName: e.target.value };
    setProductToEdit(newObj);
  };
  const editNumber = (e) => {
    let newObj = { ...productToEdit, number: e.target.value };
    setProductToEdit(newObj);
  };
  const editEmail = (e) => {
    let newObj = { ...productToEdit, email: e.target.value };
    setProductToEdit(newObj);
  };
  //   console.log(productToEdit);
  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={productToEdit?.name || ""}
              onChange={editName}
              className="my-3"
              type="text"
            />
            <FormControl
              value={productToEdit?.surName || ""}
              onChange={editSurName}
              className="my-3"
              type="text"
            />
            <FormControl
              value={productToEdit?.number || ""}
              onChange={editNumber}
              className="my-3"
              type="number"
            />
            <FormControl
              value={productToEdit?.email || ""}
              onChange={editEmail}
              className="my-3"
              type="text"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleEditClose}>
            Close
          </Button>
          <Button
            variant="outline-success"
            onClick={() => handleSave(productToEdit)}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
