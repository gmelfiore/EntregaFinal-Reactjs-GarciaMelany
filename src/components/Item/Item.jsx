import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, nombre, precio, descripcion, imagen }) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen}/>
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>{descripcion}</Card.Text>
      <Card.Text>{precio}</Card.Text>
      <Button variant="primary"><Link to={`/product/${id}`}>Ver detalle</Link></Button>
    </Card.Body>
  </Card>
  );
};

export default Item;