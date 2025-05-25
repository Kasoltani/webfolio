export function incrButton(){
  return fetch("http://127.0.0.1:5000/incrClicks", {
    method: "POST",
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}

export function getClicks(){
  return fetch("http://127.0.0.1:5000/getClicks", {
    method: "GET",
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    
}