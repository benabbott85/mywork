import React from 'react';
import './style.css'

function Card (props){
    return(
       <div className="card">
           <div className="img-container">
               <img alt={props.name} src={props.image}/>

           </div>
           <div className='content'>
               <ul>
                   <li><strong>Name: </strong>{props.name}</li>
                   <li><strong>Description:</strong>{props.description}</li>
               </ul>
           </div>

       </div> 
    )

}

export default Card