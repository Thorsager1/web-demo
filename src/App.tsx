import { useState, FormEvent } from 'react'
import reactLogo from './assets/react.svg'
import AlbumPicker from './AlbumPicker'
import './App.css'
import React from 'react';

var products = {};

async function GetJSONData() {
  const url = 'https://raw.githubusercontent.com/larsthorup/checkout-data/main/product.json'
  const response = await fetch(url)
  const data = await response.json();

  products = data;

}

function App() {
  const [count, setCount] = useState(0)

  GetJSONData();

  return ( 
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <AlbumPicker />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    
   /**
   <div className="App">
      <div>
        <button onClick={() => console.log(products)}>
          json test
        </button>
      </div>
   </div>
   */
  )
}

export default App
