import { useContext, useEffect, useState } from "react";
import {
//   collection,
//   setDoc,
//   getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import CartDetailsContext from "../CartDetails";

function Logic() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [clicked, setClicked] = useState(true);

  const { cartDetails , updateDetails } = useContext(CartDetailsContext);
  const [data, setItems] = useState(cartDetails);

  
  
  
  // setItems(cartDetails);

  function value1Change(e) {
    setValue1(e.target.value);
  }

  function value2Change(e) {
    setValue2(e.target.value);
  }

  function value3Change(e) {
    setValue3(e.target.value);
  }

  async function deleteItem(idx) {
    await deleteDoc(doc(db, "cart", idx));
    setClicked(true);
    
  }
  const [total, settotal] = useState(0);
  useEffect(() => {
    var total1 = 0;
    data.map((a) => (total1 = total1 + (a.data.quantity*a.data.price)));
    console.log(total1);
    settotal(total1);
  }, [data]);

  useEffect(()=>{setItems(cartDetails)},[cartDetails,deleteItem])

  return (
    <>
      <h1>HELLO</h1>
      {cartDetails.map((a) => (
        <h2>
          {a.id} {a.data.first}
        </h2>
      ))}
      <div>
        <label className="fw-bold">Item Name: </label>
        <input
          value={value1}
          type="text"
          placeholder="Item details"
          onChange={value1Change}
        />
        <br />
        <br />
        <label className="fw-bold">Quantity: </label>
        <input
          value={value2}
          type="number"
          placeholder="Quantity"
          onChange={value2Change}
        />
        <br />
        <br />
        <label className="fw-bold">Price: </label>
        <input
          value={value3}
          type="number"
          placeholder="Price"
          onChange={value3Change}
        />
        <br />
        <br />
        <button type="submit" >
          Submit
        </button>
      </div>
      <br />
      <br />

      {clicked && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Details</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Sub-Total</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((home, index) => (
              <>
                <tr>
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
    </>
  );
}

export default Logic;
