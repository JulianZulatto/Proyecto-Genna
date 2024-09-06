import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Categorias({titulo, descripcion, img, url}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Link to={url}>Ingresar</Link>
      </Card.Body>
    </Card>
  );
}

export default Categorias;

