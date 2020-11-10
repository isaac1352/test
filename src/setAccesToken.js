import React, { useState,useEffect } from 'react';
import queryString from 'query-string'
import Success from './success'
import Loader from './loader'

function SetAccessToken(props) {

    
console.log(props.token," ",props.theMetadata)
    

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    useEffect(() => {

        


        fetch(`https://plaid.scspooledtrust.org/api/setAccessToken?refToken=${props.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(props.theMetadata),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);

                    console.log(result)

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

        return <div>Error: {error.message} setAccessToken. Please notify an SCS representative.</div>;

    } else if (!isLoaded) {

        return(<Loader/>)

    }else{
        return <Success/>
    }


   

}

export default SetAccessToken
