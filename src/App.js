import { ToastContainer } from 'react-toastify';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import RoutesMain from './routers';

function App() {
  return (
    <AuthProvider>
      <RoutesMain/>
      <ToastContainer/>
    </AuthProvider>
  );
}

export default App;
