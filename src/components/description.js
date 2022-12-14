import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faYoutube,faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons'
function TextExample() {
  return (
    <Card style={{ width: '18rem' ,marginTop:200,marginLeft:200,backgroundColor:'#212529'}}>
      <Card.Body>
      <ul style={{textAlign: 'center',display:'block',display:'flex',justifyContent:'space-around'}}><li style={{display: 'inline'}}><FontAwesomeIcon icon={faYoutube} color='#FF4A57'  size="2x"/></li>
      <li style={{display: 'inline'}}><FontAwesomeIcon icon={faFacebook} color='#FF4A57' size="2x"/></li><li style={{display: 'inline'}}>
      <FontAwesomeIcon icon={faLinkedin} color='#FF4A57' size="2x"/></li></ul>
      
      
      
        <Card.Title style={{color:'#dfdfdf',fontSize: '27px',lineHeight: '26px'}}>I am Jonathan Doe</Card.Title>
        <Card.Text style={{color:'#dfdfdf',fontSize: '20px',textAlign: 'center'}}>
        i'm Jonathan, professional web developer with long time experience in this field​</Card.Text>
        <div style={{marginTop:'30px',marginLeft:'60px'}}>

        <button style={{borderColor: '#FF4A57',borderRadius: '50px',backgroundColor:'#FF4A57',fontSize: '15px',color:'white',   padding: '13px'}}>My portfolio</button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TextExample;