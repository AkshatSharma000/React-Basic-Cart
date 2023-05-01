import { useState, useEffect, useContext } from "react";
import CartDetailsContext from "../CartDetails";

function Card({ image, name, body, price, id }) {

  const { cartDetails , updateDetails } = useContext(CartDetailsContext);

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
    const data = res.json();
    // console.log(data,"response");
    updateDetails(data);
    // cartDetails.updateDetails(data);
    // console.log(cartDetails.details,"updated result")
    // console.log(data,"realtime data");
    if (res.status === 200) {
      console.log("POST REQUEST SUCCESSFUL");
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
        <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => noOfItems > 1 ? setNoOfItems(noOfItems-1) : setNoOfItems(1)}>-</button>
        <input type="number" size={4} value={noOfItems} disabled></input>
        <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => setNoOfItems(noOfItems+1)}>+</button>
        <br />
        <br />
        <button onClick={addToCart}>Buy @{price}</button>
      </div>
    </div>
  );
}

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9000/")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setItems(d);
        console.log(d, "hello");
      })
      .catch((error) => "Error found : " + error);
  }, []);

  return (
    <>
      <h1>Home</h1>
      {items.map((item,index) => (
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
