import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Homepage from "./Pages/HomePage/Homepage";
function App() {
  return (
    <Router>
      <Header />
      <Homepage />
    </Router>
  );
}

export default App;
