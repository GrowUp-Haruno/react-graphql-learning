import { DocumentNode, gql } from '@apollo/client';

export const GET_DATA:DocumentNode = gql`
query searchRepositories($after:String, $before:String,$first:Int,$last:Int,$query:String!){ 
	search(after:$after, before:$before,first:$first,last:$last, query:$query, type:REPOSITORY){
    repositoryCount
    pageInfo{
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges{
      cursor
      node{
        ...on Repository{
        	id
          name
          url
        }
      }
    }
  }
}
`
export type getDataVariables = {
  "after":string|null,
  "before":string|null,
  "first": number|null,
  "last": number| null,
  "query": string
}
export const INITIAL_GET_DATA_VARIABLES : getDataVariables ={
  "after":null,
  "before":null,
  "first": 5,
  "last": null,
  "query": "フロントエンドエンジニア"
}
