import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Notes from '../src/pages/all_Notes/Notes'
import SingleNote from "./pages/all_Notes/SingleNote";
function App() {
  // search state

  // dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    setDarkMode(
      localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    );
  }, []);

    // select individual item
    const [selectedItem, setSelectedItem] = useState({})
  
    function routing(item){
      setSelectedItem(item)
    }


  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          <Route path='/Notes' element={<Notes darkMode={darkMode} routing={routing}/>}/>
          <Route path='/noteDetails' element={<SingleNote item={selectedItem}/>}/>
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
