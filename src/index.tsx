import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const GITHUB_TOKEN = process.env.REACT_APP_GTIHUB_TOKEN

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {authorization: `Bearer ${GITHUB_TOKEN}`}
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

