import { useState , useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartDetailsContext from "../CartDetails";

function NavBar(){

  const { cartDetails , updateData } = useContext(CartDetailsContext);
  // console.log(cartDetails , "context");

    const [items,setItems] = useState(cartDetails);

    useEffect(() => {setItems(cartDetails)},[cartDetails])
    
  // let ans = items;
  // console.log(ans,"ccc")
  // useEffect(() => {
  //   fetch("http://127.0.0.1:9000/cart")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((d) => {
  //       setItems(d);
  //     })
  //     .catch((error) => "Error found : " + error);
  // }, []);

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
              Navbar
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="/cart" className="nav-link">
                  Cart
                  <span className="badge text-bg-secondary ms-1">{items.length}</span>
                </NavLink>
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar;