import { useEffect, useState } from "react";

function Logic()
{
    const [value1,setValue1] = useState('');
    const [value2,setValue2] = useState('');
    const [value3,setValue3] = useState('');
    const [clicked,setClicked] = useState(false);
    const [counter,setCounter] = useState(0);
    const [answer,setAnswer] = useState([]);
    
    function handleClick()
    {
        setClicked(true);
        setAnswer(oldArray => [...oldArray,{"id":counter,"value":value1,"quantity":value2,"price":value3,"subTotal":value2*value3}]);
        setCounter(counter + 1);
        console.log(answer);
        setValue1('');
        setValue2('');
        setValue3('');
    }
    
    function value1Change(e)
    {
        setValue1(e.target.value);
    }

    function value2Change(e)
    {
        setValue2((e.target.value));
    }

    function value3Change(e)
    {
        setValue3((e.target.value));
    }

    function deleteItem(idx){
        const temp = [...answer];
        let x = temp.findIndex(x => x.id === idx)
        console.log(x)

        temp.splice(x,1);
        console.log(42,temp);
        setAnswer(temp);
        if(!temp.length)
        {
            setClicked(false);
        }
    }
    const [total,settotal] = useState(0);
    useEffect(()=>{
        var total1 = 0;
        answer.map((a)=>(
            total1 = total1 + a.subTotal
        ))
        console.log(total1);
        // return (
            
        //     total
            
        // );
        settotal(total1);
    },[answer])
    // function ttc(){
    //     var total1 = 0;
    //     answer.map((a)=>(
    //         total1 = total1 + a.subTotal
    //     ))
    //     console.log(total1);
    //     // return (
            
    //     //     total
            
    //     // );
    //     settotal(total1);
    // }

    return(
    <>
    <h1>HELLO</h1>
    <div>
    <label className="fw-bold">Item Name: </label><input value={value1} type="text" placeholder="Item details" onChange={value1Change} />
    <br /><br />
    <label className="fw-bold">Quantity: </label><input value={value2} type="number" placeholder="Quantity" onChange={value2Change} />
    <br /><br />
    <label className="fw-bold">Price: </label><input value={value3} type="number" placeholder="Price" onChange={value3Change} />
    <br /><br />
    <button type="submit"  onClick={handleClick}>Submit</button>
    </div>
    <br />
    <br />
    { clicked && <table className="table">
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
        {answer.map(home => (<><tr><th key={home.id} scope="row">{home.id}</th><td>{home.value}</td><td>{home.quantity}</td><td>{home.price}</td><td>{home.price*home.quantity}</td><td><button type="button" name={home.id} className="btn btn-danger" onClick={()=>{deleteItem(home.id)}}>X</button></td></tr></>))}
        <tr><td></td><td></td><td></td><td className="fw-bold">Total</td><td className="fw-bold">{total}</td></tr>
    
        </tbody>
</table> }
    
    </>
);

}
// onClick={deleteItem(home.id)}

export default Logic;