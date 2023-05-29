import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharater($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;


const useCharacterHooks = (id) => {
    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: { id },
      });
  return {
    data,
    loading,
    error,
  }
}

export default useCharacterHooks