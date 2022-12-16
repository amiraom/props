import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
    const handelShow =(event) =>{
        event.preventDefault();
        alert(` ${props.fullName}`)
    }
    console.log(props.im);
  return (
    <div><h1>{props.fullName}</h1>
    <h1>{props.bio}</h1>
    <h1>{props.profession}</h1>
  
    <img width="100px" heigth="100px" src={props.children} alt="ici"/>
  
    <button style={{backgroundColor:"#FF4A57",color:'white', border: 'none',fontSize:"20px"}} onClick={handelShow} >Send</button>
    </div>
  )
}
Profile.defaultProps={
   
    fullName: 'default',
    bio:'default',
    profession:'default',
    im:""
    }

    Profile.propTypes = {
       
        fullName: PropTypes.string,
          bio: PropTypes.string,
          profession: PropTypes.string,
          im:PropTypes.string
    

      };



export default Profile
