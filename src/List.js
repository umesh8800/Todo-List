import React from 'react'

function List(props) {
  
    return(
    <div>
        <div className='todo_style'>
       
     <div>
     <i className="fas fa-angry" onClick={()=>{
         props.onSelect(props.id)
     } }></i>&nbsp;&nbsp;&nbsp;
     
           {props.text}
     </div>
     </div>
     </div>
    )}

export default List
