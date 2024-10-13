import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap";

import Navbar from './Component/Navbar';
import Hero from './Component/Hero';

import { FilterAndSearch } from './Component/Filter';
import { Trending } from './Component/Trending';
import { BestSelling } from './Component/BestSelling';
import { Reviews } from './Component/Reviews';
import { FindVehicles } from './Component/FindVehicles';
import { Footer } from './Component/Footer';

function App() {
 
  return (
    <>
        <Navbar/>
         <Hero/>
         <FilterAndSearch/>
         <Trending/>
         <BestSelling/>
         <Reviews/>
         <FindVehicles/>
         <Footer/>
    </>
  )
}

export default App
