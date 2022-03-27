import React from 'react';
import Header from './componenets/header';
import Notes from './pages/NotesList';
import {HashRouter as Router, Routes,Route} from 'react-router-dom';
import NotePages from './pages/NotePages';
export default function App() {
  return (
      <Router>
        <div className="container dark">
          <div className="app">
          <Header/>
          <Routes>
           <Route path ="/" element={<Notes/>}/>
           <Route path="/notes/:id" element={<NotePages/>}/>
          </Routes>
          </div>
        </div>
      </Router>

  
  )
}
