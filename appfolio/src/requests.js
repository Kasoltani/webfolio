export function incrButton(){
  fetch("http://127.0.0.1:5000/incrClicks", {
    method: "POST",
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}

export function getClicks(){
  fetch("http://127.0.0.1:5000/getClicks", {
    method: "GET",
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    
}