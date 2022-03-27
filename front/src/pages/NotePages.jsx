import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function NotePages() {
  let{ id } =useParams();
  let [note,setNote] =useState(null);
  let navigation = useNavigate()
  let getNote =async ()=>{
    if(id !== "new"){
     let response = await fetch(`/api/notes/${ id }/`)
     let data = await response.json()
     setNote(data)
    }
  }
  useEffect(()=>{
    getNote()
  },[id])

  let updateNote =async ()=>{
        await fetch(`/api/notes/${ id }/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(note)
        });
  };
  let CreateNote =async ()=>{
        await fetch('/api/notes/new', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(note)
        })
  }
  let deleteNote = async ()=>{
    await fetch(`/api/notes/${ id }/delete`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
    navigation('/')
  }
  
  let handelSubmit =async ()=>{
    if(    id  !== 'new' && !note.body){
      deleteNote()
    }
    else if(   id  !== 'new'){
      updateNote()
    }
    else if(    id    === 'new' && note !== null ){
      CreateNote()
    }
    navigation('/')
    
  }

  return (
    <div className="note">
      <div className="note-header" >
        <h3 onClick={handelSubmit} >back</h3>
        { id  !== 'new'?(
          <button onClick={deleteNote}>delete</button>
        ):(<button onClick={handelSubmit}>Save</button>)}
        
      </div>
        <textarea defaultValue={note?.body} onChange={(e)=>{setNote({...note,'body':e.target.value})}}></textarea>
    </div>
  )
}
