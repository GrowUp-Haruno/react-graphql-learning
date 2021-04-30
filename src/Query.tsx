import { DocumentNode, useQuery } from '@apollo/client';
import { getDataVariables } from './queries';

type props = {
  query: DocumentNode
  variables: getDataVariables
}

export const Query: React.FC<props> = ({query,variables})=>{
  const { loading, error, data } = useQuery(query, {variables:variables})
  
  if (loading) return <p>Loading...</p>

  if (error) return <p>error</p>

  console.log(data)
  return (
    <h2>github graphql query complete</h2>
  )
}