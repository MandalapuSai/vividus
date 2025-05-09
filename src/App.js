import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RoutingComponent from './routes/RoutingComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <main>
        <RoutingComponent /> 
      </main>
      <FooterComponent />
    </Router>

  );
}

export default App;
