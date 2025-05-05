import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Stylings/Style.css'

import Header from './Header';
import Routings from './Routes/Routings';
import Home from './Home';
import ProductCarousel from './CaroselComp';
import Cards from './Cards';
import Discount from './Discount';
import NewArrivalProducts from './NewArrivalProducts';
import BestSales from './BestSales';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './Stylings/Mobile.css'
import './Stylings/tablet.css'
// import './Stylings/laptop.css'
// import './Stylings/largescreen.css'



function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Header />
      
      <Routings></Routings>
      <Footer></Footer>
      <ToastContainer/>

      
    </div>
  );
}

export default App;
