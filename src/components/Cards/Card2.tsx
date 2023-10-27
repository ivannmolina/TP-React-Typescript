import Card from 'react-bootstrap/Card';

const Card2 = () => {
  return (
    <Card className='Cards' style={{ width: '18rem' }}>
    <Card.Img 
    variant="top"   
    src="src/assets/images/card2.jpg" 
    alt="card2" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Card2