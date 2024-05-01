import "./CharacterRatings.css";
import CharacterRating from "./_components/CharacterRating";

const CharacterRatings = ({ data }) => {
  const top5 = data.sort((a, b) => b.votes - a.votes).slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          {top5.map((character, index) => (
            <CharacterRating
              key={character.name}
              character={character}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CharacterRatings;
