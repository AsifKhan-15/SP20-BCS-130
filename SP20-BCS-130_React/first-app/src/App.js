import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/views/Homepage";
import ContactUs from "./components/views/ContactUs";
import SignUp from "./components/views/SignUp";
import Games from "./components/games/Games";

function App() {
  return (
    <div>
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/SignUp">Sign Up</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
