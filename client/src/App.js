// App.js

// css style
import "./App.css";

// app[container]

// route
import { BrowserRouter as Container, Routes, Route } from "react-router-dom";

// design + url
import NavBar from "./components/views/NavBar/NavBar";
import Landing from "./components/views/LandingPage/Landing";
import SignUp from "./components/views/SignUp/SignUp";
import Login from "./components/views/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

// rendering
function App() {
  // user
  const user = useSelector(selectUser);
  return (
    <Container>
      <NavBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Landing />} />
        {user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/signup" element={<SignUp />} />
        )}
      </Routes>
    </Container>
  );
}

export default App;
