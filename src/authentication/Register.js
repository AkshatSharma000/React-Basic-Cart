import { Link, useNavigate } from "react-router-dom";
import classes from './Register.module.css'
import { useState, useRef, useEffect } from "react";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const UP_REGEX = /(?=.*[A-Z]).{1,24}$/;
const NUM_REGEX = /(?=.*[0-9]).{1,24}$/;
const SP_REGEX = /(?=.*[!@#$%]).{1,24}$/;

export function Register() {
    const navigate = useNavigate();

    const userRef = useRef();
    // const errRef = useRef();

    const [fullName,setFullName] = useState('');

    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');
    const [validLength,setValidLength] = useState(false);
    const [validNum,setValidNum] = useState(false);
    const [validSp,setValidSp] = useState(false);
    const [validUp,setValidUp] = useState(false);

    const [pfocus,setPFocus] = useState(false);

    const [alert,setAlert] = useState(false);
    const [success,setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setValidLength(PWD_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setValidUp(UP_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setValidSp(SP_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setValidNum(NUM_REGEX.test(password));
    }, [password])

    

    async function handleSubmit(e){
        e.preventDefault();
        try
        {
            let req = await fetch('http://127.0.0.1:9000/auth/register',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: fullName,
                    emailAddress : email,
                    password : password,
                })
            });
            
            setFullName('');
            setPassword('');
            setEmail('');
            const data = req.status;
            console.log(data);
            if(data===201)
            {
                setSuccess(true);
                setTimeout(()=>{navigate('/login')},1000);
                console.log("ccccccccccxaaaaaaaaaaa")
                 
            }
            if(data===401)
            {
                setAlert(true);
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
            You are already registered. Kindly Login
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
            Registered Successfully !
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
              alt=""
              width={415}
              class="img-fluid mb-3 d-none d-md-block"
            />
          </div>

          {/* <!-- Registeration Form --> */}
          <div class="col-md-7 col-lg-6 ml-auto">
            <form onSubmit={handleSubmit}>
              <div class="row">
                {/* <!-- First Name --> */}
                <h1 className={`${classes.heading} `}>Register</h1>
                <div class="input-group col-lg-6 mb-4">
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
                    <i class="fa fa-user text-muted"></i>
                  </span>
                  <input
                    id="fullName"
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    name="firstname"
                    placeholder="Full Name"
                    class={`${classes.formControl} form-control bg-white border-left-0 border-md`}
                    required
                  />
                </div>

                {/* <!-- Email Address --> */}
                <div class="input-group col-lg-12 mb-4">
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
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
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
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
                    aria-invalid={validLength ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPFocus(true)}
                    onBlur={() => setPFocus(false)}
                    required
                  />
                  
                </div>
                
                <div className="">
                    <p className={pfocus ? `${classes.pwdError} text-danger text-start mb-0` : "d-none"}>Length should be between 8 to 24 characters<i className={validLength ? "fa-solid fa-check ms-4" : "fa-sharp fa-solid fa-xmark ms-4"} style={{color: validLength ? "#00c703":"#ff0000"}}></i></p>
                    <p className={pfocus ? `${classes.pwdError} text-danger text-start mb-0` : "d-none"}>Min 1 Uppercase<i className={validUp ? "fa-solid fa-check ms-4" : "fa-sharp fa-solid fa-xmark ms-4"} style={{color: validUp ? "#00c703":"#ff0000"}}></i></p>
                    <p className={pfocus ? `${classes.pwdError} text-danger text-start mb-0` : "d-none"}>Min 1 Special Character [! @ # $ %]<i className={validSp ? "fa-solid fa-check ms-4" : "fa-sharp fa-solid fa-xmark ms-4"} style={{color: validSp ? "#00c703":"#ff0000"}}></i></p>
                    <p className={pfocus ? `${classes.pwdError} text-danger text-start mb-0` : "d-none"}>Min 1 Number<i className={validNum ? "fa-solid fa-check ms-4" : "fa-sharp fa-solid fa-xmark ms-4"} style={{color: validNum ? "#00c703":"#ff0000"}}></i></p>
                  </div>

                {/* <!-- Submit Button --> */}
                <div class="form-group col-lg-12 mx-auto mb-0 mt-4">
                  {/* <Link to="#" class="btn btn-primary btn-block py-2"> */}
                  <button class="btn btn-primary btn-block py-2" disabled={(validLength && validNum && validSp && validUp) ? "" : "disabled"}>
                    <span class="font-weight-bold font-monospace" >
                      Create your account
                    </span>
                  </button>
                  {/* </Link> */}
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
                    Already Registered?{" "}
                    <Link
                      to="/login"
                      class="text-primary ml-2 text-decoration-none"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
