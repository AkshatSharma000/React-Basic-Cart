import { Link } from "react-router-dom";
import classes from "./Products.module.css";

export default function Products(){
    return (
      <>
        <h1>Products</h1>
        <Link to="/products/1">Product 1</Link>

        {/* ------------------------ */}

        <br />
        <div>
            <hr />
            <h1>Fiction</h1>
            <hr />
        </div>
        <br />
        <div className="container mt-4 mb-4 ps-4 pe-4">
            <div className="row">

                <div className="col-lg-6">

                    <div class="card mb-3 text-start border border-dark bg-light" style={{maxWidth:800+"px"}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="/images/Fiction-1.jpg" class="img-fluid rounded-start border-dark border-end border-1 border-bottom" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class={`card-title ${classes.cardTitle}`}>Tomorrow, and Tomorrow, and Tomorrow</h5>
                            <p class={`card-text`}><small class="text-body-secondary fw-bold">Gabrielle Zevin</small></p>
                            <p class={`card-text ${classes.cardText}`}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text fw-bold">$100</p>
                            <button className="btn btn-dark btn-sm fw-bold text-wrap">Take a look</button>
                        </div>
                        
                        </div>
                    </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div class="card mb-3 text-start border border-dark bg-light" style={{maxWidth:800+"px"}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="/images/Fiction-2.jpg" class="img-fluid rounded-start border-dark border-end border-1" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div class="card mb-3 text-start border border-dark bg-light" style={{maxWidth:800+"px"}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="/images/Fiction-3.jpg" class="img-fluid rounded-start border-dark border-end border-1" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
            
        {/* <div className="row  m-0">
          <div className={`col `}>
            <div className={`card border border-dark rounded-0`}>
              <img src="/images/Fiction-1.jpg" className={`card-img-top p-4 ${classes.image} img-fluid`} alt="..." />
              <hr className=""/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card h-100 border border-dark rounded-0">
              <img src="/images/Fiction-2.jpg" className={`card-img-top ${classes.image}`} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card h-100 border border-dark rounded-0">
              <img src="/images/Fiction-3.jpg" className={`card-img-top ${classes.image}`} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </>
    );
} 