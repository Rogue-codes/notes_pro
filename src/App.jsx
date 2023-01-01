import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notes from "../src/pages/all_Notes/Notes";
import SingleNote from "./pages/all_Notes/SingleNote";
import Educational from "./pages/all_Notes/Educational";
import Fun from "./pages/all_Notes/Fun";
import Shopping from "./pages/all_Notes/Shopping";
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
  const [selectedItem, setSelectedItem] = useState({});

  function routing(item) {
    setSelectedItem(item);
  }

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          <Route
            path="/Notes"
            element={
              <Notes
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                darkMode={darkMode}
                routing={routing}
              />
            }
          />
          <Route
            path="/noteDetails"
            element={<SingleNote item={selectedItem} darkMode={darkMode} />}
          />
          <Route
            path="/educational"
            element={
              <Educational
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                darkMode={darkMode}
                routing={routing}
              />
            }
          />
          <Route
            path="/fun"
            element={
              <Fun
                darkMode={darkMode}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                routing={routing}
              />
            }
          />
          <Route
            path="/shopping"
            element={
              <Shopping
                darkMode={darkMode}
                routing={routing}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
              />
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
