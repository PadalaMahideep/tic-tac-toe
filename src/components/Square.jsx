/* eslint-disable react/prop-types */
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
