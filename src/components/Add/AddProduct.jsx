import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProduct({ show, handleClose, handleAddProduct }) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  function handleAdd() {
    if (!name || !surName || !number || !email) {
      alert("your inputs are empty");
      return;
    }

    let newObj = {
      name,
      surName,
      number,
      email,
      id: Date.now(),
    };
    handleAddProduct(newObj);
    setName("");
    setSurName("");
    setNumber("");
    setEmail("");
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="my-3"
              placeholder="your name"
              type="text"
            />
            <FormControl
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              className="my-3"
              placeholder="your surname"
              type="text"
            />
            <FormControl
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="my-3"
              placeholder="your number"
              type="number"
            />
            <FormControl
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-3"
              placeholder="your email"
              type="@"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
