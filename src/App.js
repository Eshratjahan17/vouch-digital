import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddClients from './pages/DashBoard/AddClients';
import Dashboard from './pages/DashBoard/Dashboard';
import ViewClients from './pages/DashBoard/ViewClients';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/LogIn/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn></LogIn>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<ViewClients></ViewClients>}></Route>
          <Route
            path="addclients"
            element={<AddClients></AddClients>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
