import { ApolloClient, InMemoryCache } from '@apollo/client';

const GITHUB_TOKEN = process.env.REACT_APP_GTIHUB_TOKEN;

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: { authorization: `Bearer ${GITHUB_TOKEN}` },
});
