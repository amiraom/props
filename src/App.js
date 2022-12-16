import logo from './logo.svg';
import './App.css';
import BasicExample from './components/nav';
import Photo from './components/photo';
import TextExample from './components/description';
import TextExample2 from './components/parag';
import Elements from './components/elements';

import Test from './components/test';
import Welcome from './components/test';
import { CardList } from './components/product/CardList';
import Profile from './checkhpoint/profile/profile';
function App() {
const styleObject ={color:'#FF4A57',fontSize:'40px',textAlign:'center' ,margin:'200px',border:'1px solid #FF4A57',width:'400px'}
  let user ={
     fullName:"test1",
     bio:"test2",
    profession:3,
    im:"https://thumbs.dreamstime.com/b/belle-for%C3%AAt-tropicale-%C3%A0-l-itin%C3%A9raire-am%C3%A9nag%C3%A9-pour-amateurs-de-la-nature-de-ka-d-ang-36703721.jpg",
    
  }
  // console.log(user.src);
 
  return (
    <div style={styleObject}>

   <Profile fullName={user.fullName} bio={user.bio} profession={user.profession} im={user.im}  > 
   https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png</Profile>
    
    </div>
  );
}

export default App;
