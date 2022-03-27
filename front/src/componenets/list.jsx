import React from 'react'
import { Link } from 'react-router-dom';
let time = (note)=>{
  return new Date(note.update).toLocaleString()
}
let getTitle =(note) =>{
  let title =note.body.split('\n')[0]
  if(title.length >45){
    return title.slice(0 ,45)
  }
  return title
}

export default function list({note}) {
  return (
          <Link to={`/notes/${note.id}`} className='text-white'>
           <div className="notes-list-item">
             <h3>
               {getTitle(note)}
             </h3>
             <p><span>{time(note)}</span></p>
           </div>
          </Link>
  )
}
