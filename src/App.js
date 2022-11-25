import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Order from './Components/Dashboard/Order';
import Home from './Components/Pages/Home';
import HoneyNut from './Product/HoneyNut';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';
import GreenCoffee from './Product/GreenCoffee';
import ChiaSeed from './Product/ChiaSeed';
import Moringa from './Product/Moringa';


function App() {
  return (

    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/honeyNut' element={<HoneyNut></HoneyNut>}></Route>
        <Route path='/greenCoffee' element={<GreenCoffee></GreenCoffee>}></Route>
        <Route path='/chiaSeed' element={<ChiaSeed></ChiaSeed>}></Route>
        <Route path='/moringa' element={<Moringa></Moringa>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='order' element={<Order></Order>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
