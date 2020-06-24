import React from 'react';

import ApolloCLient from 'apollo-boost';

import {ApolloProvider} from '@apollo/react-hooks'

import ShipsContainer from './containers/ShipsContainer'

export default function App() {
  const client = new ApolloCLient({
    uri: 'https://api.spacex.land/graphql/'
  });

  return(
    <ApolloProvider client={client}>
      <main>
        <ShipsContainer />
      </main>
    </ApolloProvider>
  )
}