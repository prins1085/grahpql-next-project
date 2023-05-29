import { gql, useQuery } from "@apollo/client";
import React from "react";
import useCharacterHooks from "./useCharacterHooks";
import { useRouter } from "next/router";

const GET_CHARACTER = gql`
  query GetCharater($id: ID!) {
    character(id: 2) {
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

const characterId = () => {
    const router = useRouter();
    const id = router.query.characterId;
  const { data, error, loading } = useCharacterHooks(id);
  if (error) {
    return <div>Something Went Wrong!</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>
    <img src={data.character.image} />
    <div>
       <h1>{data.character.name}</h1> 
       <p>{data.character.gender}</p>
       <div>
        {data.character.episode.map(episode => {
            return <div>{episode.name} - <b>{episode.episode}</b></div>
        })}
        </div> 
    </div>
  </div>;
};

export default characterId;
