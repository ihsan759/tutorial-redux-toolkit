import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/contact"}>Contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
