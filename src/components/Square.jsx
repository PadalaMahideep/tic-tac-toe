/* eslint-disable react/prop-types */
const Square = ({ value, onClick, isWinningsquare }) => {
  const colorclassname = value == 'X' ? 'text-green' : 'text-orange';
  const colorwinningname = isWinningsquare ? 'winning' : '';
  return (
    <button
      className={`square ${colorclassname}  ${colorwinningname}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
