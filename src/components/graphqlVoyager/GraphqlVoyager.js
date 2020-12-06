import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Voyager } from 'graphql-voyager'
import fetch from 'isomorphic-fetch'


const GraphqlVoyager = () => {

  const introspectionProvider = (query) => {
  return fetch('http://localhost:3000/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query }),
  }).then((response) => response.json())
}

  return (
    <Voyager
      introspection={introspectionProvider}
      workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
    />
  )
}

export default GraphqlVoyager;
