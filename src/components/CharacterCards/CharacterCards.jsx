import React from "react";
import "./CharacterCards.css";
import CharacterCard from "./_components/CharacterCard";

function CharacterCards({ data }) {
  return (
    <section id="character-cards">
      {data.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </section>
  );
}

export default CharacterCards;
