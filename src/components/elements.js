import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import {faGithub,faCodepen} from '@fortawesome/free-brands-svg-icons'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'
const Elements =() => {

let element =[{icon:faGithub,title:'Web Development',parag:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'},
              {icon:faCodepen,title:'Web Design',parag:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'},
            {icon:faVideo,title:'Video Editing',parag:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'}
]

return (
<div className='CardsEl'>
{element.map(el=>{
   return (
       <div className='Cards' >
        <div>  <FontAwesomeIcon icon={el.icon} color='#FF4A57' size="2x" className='hover:text-red-500'></FontAwesomeIcon></div>
     
         
          <h2 style={{textAlign:'center',color:'white'}}>{el.title}</h2>   
          <p style={{textAlign:'center',color:'white'}}>{el.parag}</p>
               </div>
   )
})}
</div>)
}
export default Elements