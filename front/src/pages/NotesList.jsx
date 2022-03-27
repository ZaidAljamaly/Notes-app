import React,{useState,useEffect} from 'react';
import List from '../componenets/list';
import Add from '../componenets/Add';
export default function Notes() {
  let [notes,setNotes] =useState([])
  useEffect(() =>{
  fetch('/api/notes').then(res=>res.json()).then(data=>{setNotes(data)}).catch(err =>console.log(err))
  },[] )

  return (
    <div>
        <div className="notes-header">
            <h2 className="notes-title text-orange">&#9782; Notes</h2>
             <p className="notes-count text-orange">{notes.length} Notes</p>
        </div>
        <div>
          {notes.map((note, index)=> (
            <List key={index} note={note}/>
          ))}
        </div>
        <Add/>
    </div>


  )
}
