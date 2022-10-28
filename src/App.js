import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        
          <Route path="/" element={<Home/>}></Route>
          <Route path="/user/:id" element={<Profile/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
