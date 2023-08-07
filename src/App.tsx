import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import './App.css'
import { Navbar, Sidebar } from './layout'
import { AllNotes, ArchiveNotes, ErrorPage, TagNotes, TrashNotes } from './pages'

function App() {

  return (
   <div className='app'>
    <BrowserRouter>
      <Sidebar/>
      <div className='app_container'>
        <Navbar/>
      <Routes>
        <Route path= "/" element ={<AllNotes/>}/>
        <Route path= "/archive" element ={<ArchiveNotes/>}/>
        <Route path= "/trash" element ={<TrashNotes/>}/>
        <Route path= "/tag/:name" element ={<TagNotes/>}/>
        <Route path= "/404" element ={<ErrorPage/>}/>
        <Route path= "/*" element ={<Navigate to={ "/404"} replace />}/>
      </Routes>
      </div>
    </BrowserRouter>
   </div>
  )
}

export default App
