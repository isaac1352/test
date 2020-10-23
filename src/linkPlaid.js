import React, { useState,useEffect } from 'react';
import SignUp from './SignUp'
import queryString from 'query-string'

function PlaidLink({location}) {

    const queryParms = queryString.parse(location.search)

    console.log(queryParms,'from the linkPlaid')
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    console.log('your in')
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        console.log('your in')
      fetch("https://plaid.scspooledtrust.org/api/createlinktoken",{ 
        method: 'POST',
         headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      } })
        .then(res => res.json())
        .then(
          (result) => {
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
       

        <SignUp token={items.link_token} queryParms={queryParms}/>
          
        
      );
    }
  }
export default PlaidLink