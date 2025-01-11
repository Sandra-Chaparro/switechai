import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./HomePage/Homepage";
function App() {
  return (
    <Router>
      <Header />
      <Homepage />
    </Router>
  );
}

export default App;
