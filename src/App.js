import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Myfeed from "./pages/MyFeed";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Setting from "./pages/Setting";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/myfeed" element={<Myfeed />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
