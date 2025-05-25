import { useState, useEffect } from 'react'
import * as apiCall from './requests.js'


function App() {

  const [clicks, setClicks] = useState(null);

  useEffect(() => {
    apiCall.getClicks().then(data => setClicks(data));
  }, []);

  function handleClick(){
    apiCall.incrButton().then(() => {
      apiCall.getClicks().then(data => setClicks(data));
    });
  }

  return (
    <>
      <button type="button" onClick={handleClick} className="bg-sky-500 hover:bg-sky-700 rounded h-auto w-auto p-2"> Test </button>
      <h1>{clicks}</h1>
    </>
  );
}

export default App
