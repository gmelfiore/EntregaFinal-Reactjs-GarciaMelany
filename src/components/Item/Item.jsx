import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

const Item = ({ id, nombre, precio, descripcion, imagen }) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen}/>
    <Card.Body className="card">
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>{descripcion}</Card.Text>
      <Card.Text>{precio}</Card.Text>
      <Button><Link className='botonText'to={`/product/${id}`}>Ver detalle</Link></Button>
    </Card.Body>
  </Card>
  );
};

export default Item;