const CharacterRating = ({ character, index }) => {
  const { name, skillset, votes } = character;
  return (
    <tr className={index % 2 === 0 ? "dark" : "light"}>
      <td>{name}</td>
      <td>{skillset}</td>
      <td>{votes}</td>
    </tr>
  );
};

export default CharacterRating;
