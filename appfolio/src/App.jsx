import { useState } from 'react'
import './App.css'


function App() {
  return (
    <>
      <button type="button" onClick={incrButton} className="bg-sky-500 hover:bg-sky-700 rounded h-auto w-auto p-2"> Test </button>
      <h1>test</h1>
    </>
  );
}

function incrButton(){
  fetch('http://127.0.0.1:5000/addNum/')
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
}

export default App
