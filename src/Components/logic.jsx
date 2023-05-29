import { useContext, useEffect, useState } from "react";
import CartDetailsContext from "../CartDetails";
import classes from './Cart.module.css';

function Logic() {

  const { cartDetails , updateDetails} = useContext(CartDetailsContext);
  const [data, setItems] = useState(cartDetails); 
  

  async function deleteItem(idx) {
    let res = await fetch("http://127.0.0.1:9000/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId : idx,
      })
    });
    const data = await res.json();
    updateDetails(data);
    
    if (res.status === 200) {
      console.log("POST REQUEST SUCCESSFUL");
      } else {
      console.log("ERROR IN POST");
    }
  }
  const [total, settotal] = useState(0);
  useEffect(() => {
    var total1 = 0;
    data.map((a) => (total1 = total1 + (a.data.quantity*a.data.price)));
    console.log(total1);
    settotal(total1);
  }, [data]);

  useEffect(()=>{setItems(cartDetails)},[cartDetails])

  return (
    <>
      <h1>CART</h1>

      {/* -------------- */}
      <div className={`${classes.main}`}>
      <div class={`${classes.CartContainer} border border-dark container mt-4 mb-4`}>
   	   <div class={`${classes.Header}`}>
   	   	<h3 class={`${classes.Heading} p-4 pb-0`}>Shopping Cart</h3>
   	   	<h5 class={`${classes.Action} p-4 pb-0`}>Remove all</h5>
   	   </div>

       <hr />

   	   <div class={`${classes.CartItems} row mb-4`}>
   	   	  <div class={`${classes.imageBox1} col-lg-4`}>
   	   	  	<img src="/images/Fiction-1.jpg" className="img-fluid border border-dark rounded-2 shadow-lg" style={{maxWidth:200}}/>
   	   	  </div>
   	   	  <div class={`${classes.about} col-lg-4`}>
   	   	  	<h1 class={`${classes.title} `}>Tomorrow, and Tomorrow, and Tomorrow</h1>
   	   	  	<h3 class={`${classes.subtitle}`}>Fiction</h3>
   	   	  </div>
   	   	  <div class={`${classes.counter} col-lg-2`}>
   	   	  	<div class={`${classes.btn} me-4`}>+</div>
   	   	  	<div class={`${classes.count}`}>2</div>
   	   	  	<div class={`${classes.btn} ms-4`}>-</div>
   	   	  </div>
   	   	  <div class={`${classes.prices1} col-lg-2`}>
   	   	  	<div class={`${classes.amount}`}>$2.99</div>
   	   	  	<div class={`${classes.remove}`}><u>Remove</u></div>
   	   	  </div>
          
   	   </div>
      <hr className={`${classes.betweenItems}`} />
        <div class={`${classes.CartItems} row`}>
   	   	  <div class={`${classes.imageBox1} col-lg-4`}>
   	   	  	<img src="/images/Fiction-2.jpg" className="img-fluid border border-dark rounded-2 shadow-lg" style={{maxWidth:200}}/>
   	   	  </div>
   	   	  <div class={`${classes.about} col-lg-4`}>
   	   	  	<h1 class={`${classes.title} `}>Remarkably Bright Creatures</h1>
   	   	  	<h3 class={`${classes.subtitle}`}>Fiction</h3>
   	   	  </div>
   	   	  <div class={`${classes.counter} col-lg-2`}>
   	   	  	<div class={`${classes.btn} me-4`}>+</div>
   	   	  	<div class={`${classes.count}`}>2</div>
   	   	  	<div class={`${classes.btn} ms-4`}>-</div>
   	   	  </div>
   	   	  <div class={`${classes.prices1} col-lg-2`}>
   	   	  	<div class={`${classes.amount}`}>$2.99</div>
   	   	  	<div class={`${classes.remove}`}><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	  
   	 <hr/> 
   	 <div class={`${classes.checkout} row m-4`}>
      <div class={`${classes.total} col-4`}>
        <div>
          <div class={`${classes.Subtotal}`}>Sub-Total</div>
          <div class={`${classes.items}`}>2 items</div>
        </div>
        <div class={`${classes.totalAmount} col-4`}>$6.18</div>
      </div>
   	 <button class={`${classes.button}`}>Checkout</button></div>
   </div>

   </div>

      {/* -------------- */}

      {/* <div className="row">
        <div className="col-md-8">
          {data && (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item Details</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sub-Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((home, index) => (
                  <>
                    <tr key={home.id}>
                      <th key={index} scope="row">
                        {index}
                      </th>
                      <td>{home.data.name}</td>
                      <td>{home.data.quantity}</td>
                      <td>{home.data.price}</td>
                      <td>{home.data.price * home.data.quantity}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deleteItem(home.id);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="fw-bold">Total</td>
                  <td className="fw-bold">{total}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div className="col-md-4">
          <h2>Summary</h2>
        <table class="table table-borderless">
          ...
        </table>
        </div>
      </div>
      <br /> */}
      
      {/* <div class={`${classes.card}`}>
            <div class="row">
                <div class={`col-md-8 ${classes.cart}`}>
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Shopping Cart</b></h4></div>
                            <div class="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>    
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                1
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
                </div>
                <div class={`col-md-4 ${classes.summary}`}>
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div class="row">
                        <div class="col ps-0">ITEMS 3</div>
                        <div class="col text-right">&euro; 132.00</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option class="text-muted">Standard-Delivery- &euro;5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div class="row personal">
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">&euro; 137.00</div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div> */}
    </>
  );
}

export default Logic;
