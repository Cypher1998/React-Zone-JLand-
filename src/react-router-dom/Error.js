import { Link, useNavigate } from 'react-router-dom';
const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(555);
    navigate('/');
  };
  return (
    <div>
      <h1>Error Page</h1>
      <button className="btn" onClick={handleClick}>
        go home
      </button>
    </div>
  );
};

export default Error;
