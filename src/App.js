import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/details/:serviceId' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/about' element={<RequireAuth>
          <About></About>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
