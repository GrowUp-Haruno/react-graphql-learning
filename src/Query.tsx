import { DocumentNode, useLazyQuery } from '@apollo/client';
import { data, getDataVariables } from './queries';

type props = {
  query: DocumentNode
  variables: getDataVariables
}

export const Query: React.FC<props> = ({query,variables})=>{
  const [getQuery,{ loading, error, data }]= useLazyQuery<data,getDataVariables>(query)
  
  const handleClick = () => {
    getQuery({variables:variables})
  }

  if (loading) return <p>Loading...</p>

  if (error) return <p>error</p>

  console.log(data)
  const repositoryCount = data?.search.repositoryCount
  const edge = data?.search.edges
  const strRepository = repositoryCount === 1 ? "Repository" : "Repositories"
  
  if (data === undefined) return (
    <>
      <button onClick={handleClick}>Search</button>
      <h2>Plese search button</h2>
    </>
  )

  return (
    <>
      <button onClick={handleClick}>Search</button>
      <h2>GitHub Repositories Search Result - {repositoryCount} {strRepository}</h2>
    </>
  )
}