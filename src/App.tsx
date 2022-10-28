import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Role from "./components/role/Role";
import Home from "./Home";
import Login from "./Login";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/role" element={<Role />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
