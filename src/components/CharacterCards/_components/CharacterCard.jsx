const CharacterCard = ({ character }) => {
  const { name, nickName, background, imageUrl } = character;
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {nickName && <h4>{nickName}</h4>}
      </div>
      <img src={imageUrl} alt={name} />
      <p>{background}</p>
    </div>
  );
};

export default CharacterCard;
