import React from "react";
import "./CharacterCards.css";
import CharacterCard from "./_components/CharacterCard";

function CharacterCards({ data }) {
  return (
    <section id="CharacterCards">
      {data.map((item) => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}

export default CharacterCards;
