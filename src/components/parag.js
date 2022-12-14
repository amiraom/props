
import Card from 'react-bootstrap/Card';

function TextExample2() {
  return (
    <Card style={{ width: '30rem',backgroundColor:'#212529' }}>
      <Card.Body>
      <Card.Subtitle style={{textAlign:'center',fontSize:'20px',color:'#FF4A57'}}  >SERVICES</Card.Subtitle>

        <Card.Title style={{textAlign:'center',fontSize:'50px',fontStyle:'bold',color:'white'}}>My services</Card.Title>
        <Card.Text style={{textAlign:'center',color:'white'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample2;