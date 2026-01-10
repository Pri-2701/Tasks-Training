import  { useState, useEffect } from "react";


function useFetch(url) {    //custom hook for fetching data from an API
       const[data, setData] = useState(null);   //state to hold the fetch the data

       const[loading, setLoadiing] = useState(true);  //state to track the loading (true while fetching_data)

        const[error, setError] = useState(null);  //state toh hold error if any occurs during fetchning

        useEffect(()=>{     //useEffect runs whenecer the url changes
            if(!url) return;        //if no url then exit early

            setLoadiing(true);   //set loading to true before starting fetch

            fetch(url)  //fetch data from  the url
             .then((response) => {
                if(!response.ok) {
                    throw new Error("newtwork is not responsive");
                }
                    return response.json(); 
             })
                .then((data) => setData(data))  //if sucessfull set the data

                .catch((error) => setError(error))  //if there any error ,update the state error
                
                .finally(() => setLoadiing(false));  //finally set loading false after fetch is (success or error)
                }, [url]);  //depedency array wirh  url to runs useEffect when url changes

                return { data, loading, error }; 

             }
        
export default useFetch ;