

import React, { useCallback, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { Redirect } from 'react-router-dom'
import SetAccessToken from './setAccesToken'
import Loader from './loader'
import ClientExited from './ClientExited'

import Success from './success'

import Landing from './landing'

const SignUp = (props) => {

  console.log(props.queryParms, 'sign up component')



  const [success, setSuccess] = useState(false);
  const [exit, setExit] = useState(false);
  const [exitMetaError, setExitMetaError] = useState(null);
  const [data, setData] = useState(null);



  const onSuccess = useCallback((token, metadata) => {
    setData(metadata);
    setSuccess(true)
  }, []);

  const onExit = useCallback((err, metadata) => {

    if (err != null) {
      metadata.err = err
    }
    setExitMetaError({ err, metadata })
    setExit(true)



  }, []);

  const config = {
    token: props.token,
    onSuccess,
    onExit,
    // ...
  };

  const { open, ready, error } = usePlaidLink(config);


  open();

  if (success) {
    return (<><div className="SCSBackground"></div>
      <SetAccessToken theMetadata={data} token={props.queryParms.token} />
    </>)

  } else if (exit) {
    return <ClientExited data={exitMetaError} token={props.queryParms.token} />
  } else {
    return (<></>)
  }

};
export default SignUp;