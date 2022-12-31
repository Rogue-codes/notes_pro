import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/home/Home'

function App() {
  // search state

  // dark mode
  const [darkMode,setDarkMode] = useState(false)
const [searchVal, setSearchVal] = useState('')

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
