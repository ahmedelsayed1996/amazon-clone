// import { Route, Routes } from 'react-router-dom';
import { Navigate, Route, Routes } from "react-router";

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
import { Signup } from "./pages/signup/signup";
import { Login } from "./pages/login/login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useAuth } from "./context/GlobalProvider";
import CheckOut from "./pages/order/CheckOut";
import PageNotFound from "./pages/pagenotfound/pageNotFound";
import Help from "./pages/help/help";



function App() {
  const { dispatch } = useAuth()
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({

          type: "SET_USER",
          user: authuser,
        });

      } else {
        dispatch({

          type: "SET_USER",
          user: null,
        });

      }
    }
    )

  }, [])
  return (
    <>
    
      <Header />
      <Navbar />
      {/* <Sidebar /> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="help" element={<Help/>}></Route>
        {/* <Route path="*" component={<PageNotFound/> } /> */}
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      
      </Routes>
    
      <Footer />
      
    </>
  );
}

export default App;
