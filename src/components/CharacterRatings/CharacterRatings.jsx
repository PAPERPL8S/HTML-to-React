import "./CharacterRatings.css";
import CharacterRating from "./_components/CharacterRating";

const CharacterRatings = ({ data }) => {
  return (
    <section id="CharacterRatings">
      {data.map((rating) => (
        <CharacterRating rating={rating} />
      ))}
    </section>
  );
};

export default CharacterRatings;
