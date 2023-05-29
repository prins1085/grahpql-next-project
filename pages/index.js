import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  if (error) {
    return <div>Something Went Wrong!</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div className="flex flex-wrap justify-evenly p-4">
    {data.characters.results.map((character) => {
      return (
        <div className="relative">
          <img src={character.image} alt="Charater_image" />
          <div className="absolute top-[90%] text-black bg-blue-200 px-2 rounded-md font-extrabold">{character.name}</div>
        </div>
      )
    })}
  </div>;
};

export default CharacterList;
