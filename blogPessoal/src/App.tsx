import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { makeStyles } from '@material-ui/core/styles';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
});

function App() {
  const classes = useStyles();
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
