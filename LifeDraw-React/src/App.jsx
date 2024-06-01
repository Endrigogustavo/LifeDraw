import Home from './components/HomePage'
import UpdateImg from './components/UploadImg'
import ListarImg from './components/ListImg/ListarImg'
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/update" element={<UpdateImg/>} />
          <Route path="/listar" element={<ListarImg/>} />
      </Routes>
    </>
  )
}

export default App
