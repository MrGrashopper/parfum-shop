import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";

function App() {
  return (
    <div className="app">
    <Router>
      <Route path="/">
        <Navbar/>
        <Home />
      </Route>
    </Router>
     
    </div>
  );
}

export default App;
