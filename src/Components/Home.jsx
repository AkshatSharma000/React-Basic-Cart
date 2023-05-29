import { useState, useContext, useEffect } from "react";
import CartDetailsContext from "../CartDetails";
import classes from './Home.module.css';
import CountUp from 'react-countup';

function Card({ image, name, body, price, id }) {

  const { updateDetails } = useContext(CartDetailsContext);
  // const [alert , setAlert] = useState([]);

  const [noOfItems,setNoOfItems] = useState(1);

  async function addToCart() {
    let res = await fetch("http://127.0.0.1:9000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId : '@'+name,
        name: name,
        price: price,
        quantity: noOfItems,
      }),
    });
    const data = await res.json();
    updateDetails(data);
    
    if (res.status === 200) {
      console.log("POST REQUEST SUCCESSFUL");
      // const d = [{'name': name , 'show':true}];
      // setAlert(d);
      } else {
      console.log("ERROR IN POST");
    }

  }
  // console.log(cartDetails,"post")

  return (
    <div key={id} className="card">
      <img
        src={image}
        className="card-img-top"
        width={200}
        height={600}
        alt="testing"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{body}</p>
        <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => noOfItems > 1 ? setNoOfItems(noOfItems-1) : setNoOfItems(1)}>-</button>
        <input type="text" className={`ms-2 me-2 ${classes.cardItem}`} value={noOfItems} disabled></input>
        <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => setNoOfItems(noOfItems+1)}>+</button>
        <br />
        <br />
        <button onClick={addToCart}>Buy @{price}</button>
      </div>
    </div>
  );
}

export default function Home() {
  // const [alert , setAlert] = useState([]);

  const { productDetails } = useContext(CartDetailsContext);

  const [items, setItems] = useState(productDetails);

  useEffect(() => {setItems(productDetails)},[productDetails]);

  // function addAlert(){
  //   return (
  //     <>
  //     <div className="alert alert-success alert-dismissible" role="alert">
  //       <div>{} is added to cart.</div>
  //       <button
  //         type="button"
  //         className="btn-close"
  //         data-bs-dismiss="alert"
  //         aria-label="Close"
  //       ></button>
  //     </div>
  //     </>
  //   )
  // }

  return (
    <>
      {/* {addAlert} */}
      <section>
      <div className={`${classes.main} container-fluid mt-4`}>
        <div className={`${classes.mainRow} row justify-content-center ms-2 d-flex`}>
          <div className="col-md-auto">
            <img src="/images/statement-book.gif" className={`${classes.mainImage} img-fluid`} alt="image1"/>
          </div>
          <div className={`${classes.mainText} col-md-auto`}>Welcome ! To the <span className={`${classes.highlightedText} font-monospace`}>superstore of Books</span>, find yourself a perfect book.</div>
        </div>
        <div className={`${classes.smallText}`}>
          <div className="text-nowrap">
          <CountUp end={100000} />
          + Books . Free Delivery . Original Product
          </div>
        </div>
      </div>
      </section>
      <section className="fiction">
        <div className={` ${classes.fictionDiv} container-fluid`}>
        <div className={` ${classes.fictionText} container shadow-lg w-auto`}>
          FICTION
          <div className={` ${classes.fictionPara} `}>
          Fiction is any creative work, chiefly any narrative work, portraying individuals, events, or places that are imaginary, or in ways that are imaginary. Fictional portrayals are thus inconsistent with history, fact, or plausibility.
          </div>
          <button type="button" class={` ${classes.fictionBtn} btn btn-primary`}>Explore Books</button>
        </div>
        </div>
      </section>
      <section>
        <div className={`${classes.bestsellerDiv} container-fluid`}>
        <div className={`${classes.bestsellerHeading}`}>
              #1 Best Seller 
            </div>
          <div className="row align-items-center pb-3">
            <div className={`${classes.bestsellerText} col-lg`}>
               Do Epic Shit
            </div>
            <div className="col-lg">
              <img src="/images/doEpicShit.png" alt="book" className={`${classes.bestsellerImg} `}/>
            </div>
          </div>
        </div>
      </section>
      <section className="nonFiction">
        <div className={` ${classes.nonFictionDiv} container-fluid`}>
        <div className={` ${classes.fictionText} container shadow-lg w-auto`}>
          NON FICTION 
          <div className={` ${classes.fictionPara} `}>
          Non-fiction is any document or media content that attempts, in good faith, to convey information only about the real world, rather than being grounded in imagination. Non-fiction typically aims to present topics objectively based on historical, scientific, and empirical information .
          </div>
          <button type="button" class={` ${classes.fictionBtn} btn btn-primary`}>Explore Books</button>
        </div>
        </div>
      </section>

      {items.map((item, index) => (
        <Card
          image={item.data.url}
          name={item.data.first + " " + item.data.last}
          body={"Born in " + item.data.born}
          price={100}
          id={item.id}
          key={index}
        />
      ))}
    </>
  );
}
