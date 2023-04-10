// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from "react-router";

import "./App.css";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";
import Navbar from "./Components/navBar/navbar";
import Accessories from "./pages/Accessories/accessories";
import Clothing from "./pages/Clothing/clothing";
import Computer from "./pages/Computers/computer";
import Electronics from "./pages/Electronics/electronics";
import Fashion from "./pages/Fashion/fashion";
import Grocery from "./pages/Grocery/grocery";
import Home from "./pages/Home/home";
import Mobile from "./pages/Mobile/Mobile";
import Tv from "./pages/TV/tv";
import Videos from "./pages/Videos/videos";
import cards from "./pages/cards/cards";
import Cards from "./pages/cards/cards";
import Sidebar from "./Components/sidepar/sidebar";
import Search from "./pages/search/search";
import Signin from "./pages/SginIn/signin";
// import Register from "./pages/Register/register";
function App() {
  return (
    <>
    
      <Header />
      <Navbar />
      {/* <Sidebar /> */}
      {/* <Home/> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/search" element={<Search />} />

        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
