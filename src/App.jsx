import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Manager from './components/Manager';
import AddNewEntry from './components/AddNewEntry';
import EditEntry from './components/EditEntry';


function App() {
  
  return (
    <>
      <BrowserRouter>

        <Layout >
          <Routes>
            <Route path="/" element={<Manager />} />
            <Route path="/add-new-entry" element={<AddNewEntry />} />
            <Route path="/edit-entry/:id" element={<EditEntry />} />
          </Routes>
        </Layout>
      
      </BrowserRouter>
      

    </>
  )
}

export default App
