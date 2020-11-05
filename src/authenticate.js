import React, { useState, useEffect } from 'react';
import Landing from './landing'

import ExpiredError from './ErrorMessageAuth'

import queryString from 'query-string'
import Loader from './loader'
import './App.css';

function Auth({ match, location }) {



    const queryParms = queryString.parse(location.search)

    console.log(queryParms)

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('your ')
        fetch(`https://plaid.scspooledtrust.org/tok`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(queryParms),
        })
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

        return <Loader/>;

    } else if (items.message === 'valid') {

        return <Landing queryParms={queryParms}/>

    } else if (items.message === 'expired') {
        
        return <ExpiredError message='expired'/>

    } else {
        return <ExpiredError message='invalid'/>
        
        
    }



}

export default Auth