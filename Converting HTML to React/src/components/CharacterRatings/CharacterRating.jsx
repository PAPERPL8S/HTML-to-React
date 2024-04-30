const CharacterRating = ({ rating }) => {
  const { name, skillset, votes } = rating;
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index} className={index % 2 === 0 ? "dark" : "light"}>
              <td>{name}</td>
              <td>{skillset}</td>
              <td>{votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CharacterRating;
