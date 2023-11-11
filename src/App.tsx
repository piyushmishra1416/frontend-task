
import './App.css'
import Landing from './components/Landing';
import  ResponsiveAppBar from './layouts/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
     <Router>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          {/* <Route path="/people" element={<People />} /> */}
          {/* <Route path="/about" component={About} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
