import { useState } from 'react'

import './App.css'
import Nav from './Home/Nav'
import Landing from './Home/Landing'
import '/src/Home/Landing.css'
import '/src/Home/Nav.css'
import { StoreProvider } from "./StoreContext.jsx";
const App = () => {
 const [cartCount, setcartCount] = useState(0);
 const handleAddToCart = () => {
  setcartCount(cartCount + 1);
  console.log("Item added to cart. Total items: " + (cartCount + 10));

 }

  return(
  
  <div>
  
  <StoreProvider>
       <Nav />
      <Landing />
  </StoreProvider>


  </div>

  )

}
export default App
