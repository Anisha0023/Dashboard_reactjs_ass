import './App.css';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import { AuthProvider } from "./components/Auth"; 
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';


const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
