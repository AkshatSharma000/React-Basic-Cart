import { useState , useRef, useContext } from 'react'
import classes from './Login.module.css'
import { Link,useNavigate } from 'react-router-dom';
import CartDetailsContext from "../CartDetails";


export function Login(){

    const { updateLogin } = useContext(CartDetailsContext);

    const userRef = useRef();
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [alert,setAlert] = useState(false);
    const [success,setSuccess] = useState(false);

    // const [pfocus,setPFocus] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        try
        {
            let req = await fetch('http://127.0.0.1:9000/auth/login',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    emailAddress:email,
                    password:password,
                })
            });
            
            setPassword('');
            setEmail('');
            
            const data = await req.json();
            console.log(data.token);

            const accessToken = data.token;

            
            if(req.status === 200)
            {
                setSuccess(true);
                // const data = await req.json();
                // console.log(data?.accessToken);

                // const token = data?.accessToken;

                localStorage.setItem("token",accessToken);
                updateLogin(true);
                setTimeout(()=>{navigate('/')},1000);
                console.log("ccccccccccxaaaaaaaaaaa")
                 
            }
            else
            {
                setAlert(true);
                console.log(data.message);
            }
             
        } catch(error) {
            console.log("Error found : " + error);
        }
    }

    return (
        <>
        <div class="container">
        <div class="row py-5  align-items-center">
        {alert && (
          <div className="alert alert-danger" role="alert">
            Email Address/Password Wrong !!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {success && (
            <div className="alert alert-success" role="alert">
            Successfully logged In.
            <button
              type="button"
              className="btn-close float-right"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
          <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="/images/authImage.png"
              alt="books"
              width={415}
              class="img-fluid mb-3 d-none d-md-block"
            />
          </div>

          {/* <!-- Login Form --> */}
          <div class="col-md-7 col-lg-6 ml-auto">
            <form onSubmit={handleSubmit}>
              <div class="row">
                {/* <!-- Heading --> */}
                <h1 className={`${classes.heading} `}>Login</h1>

                {/* <!-- Email Address --> */}
                <div class="input-group col-lg-12 mb-4">
                  <span class="input-group-text bg-white px-4 border-md border-right-0 ">
                    <i class="fa fa-envelope text-muted"></i>
                  </span>
                  <input
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    placeholder="Email Address"
                    class={`${classes.formControl} form-control bg-white border-left-0 border-md`}
                    required
                  />
                </div>

                {/* <!-- Password --> */}
                <div class="input-group col-lg-6 mb">
                  <span class="input-group-text bg-white px-4 border-md border-right-0 ">
                    <i class="fa fa-lock text-muted"></i>
                  </span>
                  <input
                    id="password"
                    type="password"
                    ref={userRef}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    placeholder="Password"
                    class={`${classes.formControl} form-control bg-white border-left-0 border-md`}
                    aria-describedby="pwdnote"
                    // onFocus={() => setPFocus(true)}
                    // onBlur={() => setPFocus(false)}
                    required
                  /> 
                </div>
                
                {/* <!-- Submit Button --> */}
                <div class="form-group col-lg-12 mx-auto mb-0 mt-4">
                  <button class="btn btn-primary btn-block py-2" >
                    <span class="font-weight-bold font-monospace" >
                      Login
                    </span>
                  </button>
                </div>

                {/* <!-- Divider Text --> */}
                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div class="border-bottom w-100 ml-5"></div>
                  <span class="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div class="border-bottom w-100 mr-5"></div>
                </div>

                {/* <!-- Already Registered --> */}
                <div class="text-center w-100">
                  <p class="text-muted font-weight-bold">
                    Not yet Registered?{" "}
                    <Link
                      to="/register"
                      class="text-primary ml-2 text-decoration-none"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}