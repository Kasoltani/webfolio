import { useState } from 'react'
import * as apiCall from './requests.js'


function App() {
  return (
    <>
      <button type="button" onClick={apiCall.incrButton()} className="bg-sky-500 hover:bg-sky-700 rounded h-auto w-auto p-2"> Test </button>
      <h1>test</h1>
    </>
  );
}

export default App
