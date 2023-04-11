import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BusInfo from './components/pages/BusInfo';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Navbar from './components/Navbar';
import Reservation from './components/pages/Reservation';
import Gallery from './components/pages/Gallery';
import Upload from './components/imgComponents/Upload';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<BusInfo />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/upload' element={<Upload/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
