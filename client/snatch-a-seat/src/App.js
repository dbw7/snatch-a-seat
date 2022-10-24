import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/auth' element={<Auth />} />
          {/* <Route path='/products'  />
          <Route path='/products/:productId'  /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
