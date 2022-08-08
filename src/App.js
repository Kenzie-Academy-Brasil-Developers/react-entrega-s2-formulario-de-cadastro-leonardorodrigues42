import { ToastContainer } from 'react-toastify';
import './App.css';
import RoutesMain from './routers';

function App() {
  return (
    <>
      <RoutesMain/>
      <ToastContainer/>
    </>
  );
}

export default App;
