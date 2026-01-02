//this functions fetches data from a url
function fetchRetry(url, retries = 5){  //if req fails ,it retries again 3times
       return fetch(url)  //call the fetch Api with give url

       .then(response =>{   //handle response
              if(!response.ok){       ///if url status is not sucessful
                     throw new Error("Request failed");   //throe Error
              }
               return response.json();  //convert response to json
       })

       .catch(error =>{    //catch error from above block
             if(retries > 0){
                console.log("retrying...");
                return fetchRetry(url, retries  -1)  //call the same function again with retries reduced by 1
             }
             throw error;
       })
}


//  fetch('https://jsonplaceholder.typicode.com/todos/1')  //correct url
fetchRetry('https://jsonplaceholder.typicode.com/to/invalid')  //wrong url
.then(response => response.json())   //then runs when server reponds successfully and response is response object  not actual data
.then(json => console.log(json))    //response.json() coverts body into javascript object and json contains actual api

.catch(error => console.log("Final Error: ", error.message));