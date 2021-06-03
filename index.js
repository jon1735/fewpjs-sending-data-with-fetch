// Add your code here
function submitData (name, email) {
   const formData = { 
       name: name,
       email: email
   }
    const newRequest = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    } , 
    body: JSON.stringify(formData)   
}
const returnFetch = fetch("http://localhost:3000/users", newRequest) 
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
       const newElement = document.createElement('div')
       newElement.innerHTML = object.id
        document.querySelector("body").append(newElement)
        console.log(newElement)
    })
    .catch(function(error){
    
        const errorAlert = document.createElement('div')
        errorAlert.innerHTML = error.message
        document.querySelector("body").append(errorAlert)
        console.log(errorAlert)
    })
return returnFetch
    };






