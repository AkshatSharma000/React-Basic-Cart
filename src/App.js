import { useState , useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import CartDetailsContext from './CartDetails';


function App(){
const [cartDetails,setCartDetails] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:9000/cart")
    .then((res) => {
      return res.json();
    })
    .then((d) => {
      console.log(d);
      setCartDetails(d);
    })
    .catch((error) => "Error found : " + error);
}, []);

  function updateDetails(props){
    setCartDetails(props);
  };


  return (
    <>
    <CartDetailsContext.Provider value={{ cartDetails , updateDetails }}>
    <NavBar />
    <Outlet />
    </CartDetailsContext.Provider>
    </>
  );
}

export default App;
