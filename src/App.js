import React from 'react';
import ApolloCLient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'

import ShipsContainer from './containers/ShipsContainer'
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme.js';

export default function App() {
  const client = new ApolloCLient({
    uri: 'https://api.spacex.land/graphql/'
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ApolloProvider client={client}>
        <main>
          <ShipsContainer />
        </main>
      </ApolloProvider>
    </ThemeProvider>
  )
}