import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Chat from "./components/Chat";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SideNavBar from "./components/SideNavBar";

function App() {
  //   // { <Routes>
  //   <Route path="/login" element={<Login />} />
  //   <Route path="/register" element={<Register />} />
  //   <Route path="/chat" element={<Chat />} />
  //   {/* <Route path="/" element={<Navigate to="/login" replace />} />  */}
  //   <Route path="/" element={<Home />} />
  // </Routes>}
  return (
    <div className="bg-[#0f0e0e]">
      <Router>
        <div className="header w-screen ">
          <Header />
        </div>

        <div className="main flex h-screen">
          <SideNavBar />
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
