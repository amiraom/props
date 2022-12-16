import React from 'react'
import PropTypes from "prop-types";
export const CardItem = ({element}) => {

    const handelShow =(event) =>{
        event.preventDefault();
        alert(`this is a ${element.name} with a price  ${element.price}`)
    }
 
    
  return (
    <>
    
      <div style={{width:'200px'}}>
        <h1>{element.name}</h1>
        
       </div>
       <div>
       <img src={element.image} alt='product' width='100px' height='100px'/>
       
      </div>
      <div>
        <h3>{element.price}</h3>
      </div>
      <button onClick={handelShow}>show details </button>
      </>
  

  )
}
CardItem.defaultProps={
    element:{
    name: 'test',
    image:'',
    price:1000
    }
     
        };

        CardItem.propTypes = {
          element: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            price: PropTypes.number
          })
        };
