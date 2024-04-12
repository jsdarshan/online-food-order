
import './App.css';
import { Routes, Route, NavLink ,Navigate} from 'react-router-dom'
import Footer from "./components/Footer";
import Home from './components/Home';
import Myorders from './components/Myorders';
import Foods from './components/Foods';
import Contactus from './components/Contactus'
import Order from './components/Order';

function App() {
  


  return (
    <div className="App fs-6">
      <nav style={{backgroundColor: "black"}} className="navbar fixed-top navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <a href="#" className="navbar-brand">
            <img src="https://ouch-cdn2.icons8.com/HDe_jyXfY6TlqRV9y_DcjXL6FwkolhuyA3zSBLQIZLY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjc2/L2Q4MjI2OGMwLTBl/ZWUtNDEwYi1iY2Vj/LTZmZjQzOWVkNGEw/My5wbmc.png" height="55"alt="CoolBrand"/>
        </a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink className="nav-link text-light mb-1" to="home">Home</NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <NavLink className="nav-link text-light" to="foods">Menu</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-light" to="myorders">My orders</NavLink>
        </li>
        <li className="nav-item pe-3">
        <NavLink className="nav-link text-light" to="contactus">Contact us</NavLink>
        </li>
        <nbsp></nbsp>
        <div className='text-center ps-3 pt-2'>
        <h4 className='nav-item text-light ps-3 ms-5'><i>Signature Cuisine</i></h4>
        </div>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>
        <Route path="home" element={<Home />} />
         <Route path="foods" element={<Foods />} /> 
         <Route path="myorders" element={<Myorders />} /> 
         <Route path="contactus" element={<Contactus />} /> 
         <Route path="order" element={<Order/>}/>

        <Route path="" element={<Navigate replace to={'home'}  />} />
      </Routes>

      <div className="footer mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
