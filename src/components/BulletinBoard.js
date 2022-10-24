import React from 'react'

const BulletinBoard = (props) => {
    let cat = (props.category == null)?"":"Category: ";
    let postit =(props.post == null)? "": "Post: ";
    let ids =(props.id == null)? "": "ID: ";
    
    
  return (
    <div>
        <h3>{ids} {props.id}</h3>
        <h3>{cat} {props.category}</h3>
        <h4>{postit} {props.post}</h4>
        
    </div>
  )
}

export default BulletinBoard
    