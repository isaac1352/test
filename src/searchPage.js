import React, { Component } from 'react';

import queryString from 'query-string'

export default ({ match, location }) => {

    const value=queryString.parse(location.search)

    console.log(location,match,value)
    return (
      <p>
        <strong>Location Props: </strong>
        {JSON.stringify(value, null, 2)}
      </p>
    );
  }

 