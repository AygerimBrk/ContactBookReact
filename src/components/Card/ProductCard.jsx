import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function ProductCard({ item, handleDelete, handleEdit }) {
  return (
    <Card
      style={{
        width: "15rem",
        margin: "40px",
        backgroundColor: "#CEE5D0",
        border: "1px solid green",
      }}
    >
      <Card.Body>
        <Card.Title>Info about client</Card.Title>
        <Card.Text>
          Name : {item.name} <br />
          Surname : {item.surName} <br />
          Number : {item.number} <br />
          Email : {item.email}
        </Card.Text>
        <Button variant="outline-success" onClick={() => handleDelete(item.id)}>
          Delete
        </Button>
        <Button variant="outline-success" onClick={() => handleEdit(item.id)}>
          Update
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
