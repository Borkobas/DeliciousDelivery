import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import the Routes component
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes> {/* Wrap your routes inside the Routes component */}
          <Route path="/" element={<Homescreen />} /> {/* Use the element prop instead of component */}
          <Route path="/cart" element={<Cartscreen />} /> {/* Use the element prop instead of component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
