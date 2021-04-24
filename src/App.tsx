
import { useQuery,gql } from '@apollo/client';

const GET_DATA= gql`
  query { 
    viewer { 
      login
    }
  }
`

const Query:React.FC = ()=>{
  const { loading, error, data } = useQuery(GET_DATA)
  
  if (loading) return <p>Loading...</p>

  if (error) return <p>error</p>

  console.log(data)

  return (
    <h2>github graphql query complete</h2>
  )
}

function App() {
  return (
    <>
      <div className="App"> </div>
      <Query />
    </>

  );
}

export default App;
