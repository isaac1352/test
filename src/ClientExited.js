import React, { useState,useEffect } from 'react';
import Exited from'./exited'

import Spinner from './loader'

function ClientExited(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    console.log(props.data.metadata,props.data.err)

    useEffect(() => {



        fetch(`https://plaid.scspooledtrust.org/link/onExit?refToken=${props.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(props.data.metadata,props.data.err),
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



    }, []);

    if(isLoaded){
        return <Exited/>
        
    }else{
        return <Spinner/>
    }

}

export default ClientExited