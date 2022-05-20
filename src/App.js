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
// import Products from "./components/Products";

function App() {
  return (
<>

      <Navbar />

   
     <BrowserRouter>
     <Routes >
       <Route  exact path="/"  element={<HomePage/>} />
       <Route path="/products" element={ <Products/> } />
       </Routes>
       </BrowserRouter>
   

</>
  
  
   
  );
}

export default App;
