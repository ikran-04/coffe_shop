import React from "react";
import {
  BrowserRouter,
  Router,
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
       <Route path="expenses" element={ <Products/> } />
       </Routes>
       </BrowserRouter>
   

</>
  
  
   
  );
}

export default App;
