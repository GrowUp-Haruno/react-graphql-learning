import { DocumentNode, useQuery } from '@apollo/client';
import { data, getDataVariables } from './queries';

type props = {
  query: DocumentNode
  variables: getDataVariables
}

export const Query: React.FC<props> = ({query,variables})=>{
  const { loading, error, data }= useQuery<data,getDataVariables>(query, {variables:variables})
  
  if (loading) return <p>Loading...</p>

  if (error) return <p>error</p>

  console.log(data)
  const repositoryCount = data?.search.repositoryCount
  const edge = data?.search.edges
  const strRepository = repositoryCount === 1 ? "Repository" : "Repositories"
  
  return (
    <h2>GitHub Repositories Search Result - {repositoryCount} {strRepository}</h2>
  )
}