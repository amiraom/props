import logo from './logo.svg';
import './App.css';
import BasicExample from './components/nav';
import Photo from './components/photo';
import TextExample from './components/description';
import TextExample2 from './components/parag';
import Elements from './components/elements';


function App() {
  return (
    <div style={{backgroundColor:'#7A7A7A'}}>
   

      <div className='nav1'><BasicExample/></div>
      <div className='partie1'>
     <div className='description'><TextExample/></div><div className='photo1'><Photo/></div></div>
     <div className='partie2'>
      <div className='services'><TextExample2/></div>

    </div >
    <div style={{height:'400px'}}><Elements/></div>
    </div>
  );
}

export default App;
