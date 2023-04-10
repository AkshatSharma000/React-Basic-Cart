import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';


const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

function App() {
  const [position,setPosition] = useState({x:0,y:0});
  const [list,setList] = useState(initialList);

  function handleClick()
  {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json')
    .then(res => res.json())
    .then((result)=> {
      setItems(result);
    },[])
  })

  var ex = Object.keys(items).map(function(key){
    return <li>{key} : {items[key]}</li>
  })

  return (
    <>
    {/* <div
    onPointerMove={e =>{
      setPosition({x:e.clientX,y:e.clientY});
    }}
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
    }}
      >
        <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
      </div>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
      <ul>
        {ex}
      </ul> */}
      <h1>APP</h1>
      </>
  );
}

export default App;
