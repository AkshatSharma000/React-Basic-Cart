import { useState , useEffect, useContext } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import CartDetailsContext from "../CartDetails";
import classes from './navbar.module.css';

function NavBar(){

  const { cartDetails, isLoggedIn , updateLogin } = useContext(CartDetailsContext);
    const [items,setItems] = useState(cartDetails);
    const [login,setLogin] = useState(isLoggedIn);

    const navigate = useNavigate();
    // console.log(isLoggedIn,localStorage.getItem('token'),login);

    useEffect(()=>{
      setLogin(isLoggedIn);
    },[isLoggedIn])

    // useEffect(()=>{
    //   if(localStorage.getItem('token'))
    //   setIsLoggedIn(true);
    //   else
    //   setIsLoggedIn(false);  
    // },[localStorage.getItem('token')]);

    useEffect(() => {setItems(cartDetails)},[cartDetails])

    // const [isloggedIn,setisLoggedIn] = useState(localStorage.getItem('token'));
    // if(localStorage.getItem('token'))
    // setisLoggedIn(true);


    function handleLogout(){
      localStorage.removeItem("token");
      navigate('/');
      updateLogin(false);
    }

    // const activeLink = "btn btn-success"

    return (
      <>
        {/* <div className={`${classes.navMain}`}> */}
        <nav
          className={`${classes.navbar} navbar navbar-expand-lg bg-body-tertiary border-bottom border-dark shadow-lg p-3 bg-body-tertiary  `}
        >
          <div className="container-fluid">
            <img
              src="/images/logo.png"
              className="img-logo me-2"
              width={50 + "px"}
              height={50 + "px"}
              alt="logo"
            />
            <NavLink
              to="/"
              className={`${classes.navbarBrand} navbar-brand fw-bold font-monospace `}
            >
              Book-kart
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
            <div
              className="container-fluid collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav container-fluid">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
                { login &&
                <NavLink to="/cart" className="nav-link">
                  Cart
                  <span className="badge text-bg-secondary ms-1">
                    {items.length}
                  </span>
                </NavLink>
                }
              </div>
              <div className="container-fluid d-flex justify-content-lg-end justify-content-center">
                { !login && (
                  <>
                <NavLink to="/login" className="nav-link me-2">
                  <button
                    type="button"
                    class={`${classes.navButton} btn btn-outline-success border-5 fw-bold font-monospace`}
                  >
                    Login
                  </button>
                </NavLink>
                <NavLink
                  to="/register"
                  className={"nav-link"}
                >
                  <button
                    type="button"
                    className={`${
                      classes.navButton
                    } btn btn-outline-success border-5 fw-bold font-monospace `}
                  >
                    Register
                  </button>
                </NavLink>
                </>
                )}
                { login && (
                  <>

                  <h3 className="me-2 mt-2 font-monospace">Welcome</h3>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className={`${
                      classes.navButton
                    } btn btn-outline-success border-5 fw-bold font-monospace `}
                  >
                    LogOut
                  </button>
                </>
                )}
              </div>
            </div>
          </div>
        </nav>
        {/* </div> */}
      </>
    );
}

export default NavBar;