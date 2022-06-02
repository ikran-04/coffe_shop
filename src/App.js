import React from "react";
import { BrowserRouter, Route,Routes,} from "react-router-dom";
import HomePage from "./Pages/home";
import HelpPage from "./Pages/hlepPage";
import Navbar from "./components/Navbar";
import Products from "./Pages/products";
import AddToCart from "./components/AddToCart";
import Cart from "./components/cart";
import GalleryPage from "./Pages/Gallery";
import Register from "./components/registration";

function App() {
  return (
<>

      <Navbar />

     <BrowserRouter>
     <Routes >
       <Route  exact path="/"  element={<HomePage/>} />
       <Route path="/products" element={ <Products/> } />
       <Route path="/add" element={ <AddToCart/> } />
       <Route path="/cart" element={ <Cart/> } />
       <Route path="/help" element={ <HelpPage/>} />
       <Route path="/gallery" element={<GalleryPage/> } />
       <Route path="/registration" element={<Register/> } />
       </Routes>
       </BrowserRouter>
   

</>
  
  
   
  );
}

export default App;
