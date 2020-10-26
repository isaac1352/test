import React, { useState,useEffect } from 'react';

import queryString from 'query-string'

function Test() {

    

    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    console.log('your in')
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        console.log('your in')
      fetch("items")
        .then(res => res.json())
        .then(
          (result) => {

            console.log(result)
            setIsLoaded(true);
            setItems(result);
            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
      return (
       

        <div></div>
          
        
      );
    }
  }
export default Test