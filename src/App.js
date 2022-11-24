import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import HoneyNut from './Components/Pages/HoneyNut';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';


function App() {
  return (

    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='nut' element={<HoneyNut></HoneyNut>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
