import './Card.css';

const Card = (props) => {
  const { id, first_name, onClick, selectedUser, width } = props;
  console.log(width);
  return (
    <div
      id={id}
      className={`${selectedUser === id && 'selected'} card`}
      onClick={onClick}
      style={{ width: `${width}%` }}
    >
      <div>{first_name}</div>
    </div>
  );
};

export default Card;
