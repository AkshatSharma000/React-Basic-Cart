import { useState , useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import CartDetailsContext from './CartDetails';
import { getAuthToken } from './util/authenticator';


function App(){
const [cartDetails,setCartDetails] = useState([]);

const [isLoggedIn,setisLoggedIn] = useState(true);

useEffect(()=>{
  if(localStorage.getItem("token"))
  {
    setisLoggedIn(true);
    console.log("CONTEXT RUNNING SUCCESSFULLY");
  }
  else
  setisLoggedIn(false);
},[])

const [productDetails,setProductDetails] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:9000/")
    .then((res) => {
      return res.json();
    })
    .then((d) => {
      setProductDetails(d);
      console.log(d, "hello");
    })
    .catch((error) => "Error found : " + error);
}, []);

useEffect(() => {
  const token = getAuthToken();
  console.log(token);
  fetch("http://127.0.0.1:9000/cart",{
    headers:{"Authorization": "Bearer "+token}
  })
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

  function updateLogin(props){
    setisLoggedIn(props);
  }

  return (
    <>
    <CartDetailsContext.Provider value={{ cartDetails , isLoggedIn , productDetails , updateDetails , updateLogin }}>
    <NavBar />
    <Outlet />
    </CartDetailsContext.Provider>
    </>
  );
}

export default App;
