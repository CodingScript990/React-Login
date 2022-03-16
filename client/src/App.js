// App.js

// css style
import "./App.css";

// app[container]

// route
import { Routes, Route } from "react-router-dom";

// design + url
import NavBar from "./components/views/NavBar/NavBar";
import Landing from "./components/views/LandingPage/Landing";
import SignUp from "./components/views/SignUp/SignUp";
import Login from "./components/views/Login/Login";

// rendering
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Landing />} />
        {/* SignUp */}
        <Route path="/signup" element={<SignUp />} />
        {/* Login */}
        <Route path="/login/:id" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
