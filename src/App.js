import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// import {browserHistory} from "connect-history-api-fallback"
import HomePage from "./Pages/home";
import Navbar from "./components/Navbar";
import Products from "./Pages/products";
import AddToCart from "./components/AddToCart";
import Cart from "./components/cart";
import Help from "./components/help";
import Gallery from "./components/gallery";
// import Products from "./components/Products";

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
       <Route path="/help" element={ <Help/> } />
       <Route path="/gallery" element={<Gallery/> } />
       </Routes>
       </BrowserRouter>
   

</>
  
  
   
  );
}

export default App;
