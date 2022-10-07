import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/LogIn/Register';

function App() {
  return (
    <div >
      <Home></Home>
      <Routes>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
