const Book = (props) => {
  // const { image, author, title } = props.book;
  const { image, author, title } = props;
  const handleClick = () => {
    console.log(author);
  };

  const clickHandler = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={image} alt="" style={userStyle} />
      <h3 onClick={() => console.log(title)}>{title}</h3>
      <h4>{author}</h4>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => clickHandler(author)}>Click Me Again</button>
    </article>
  );
};

const userStyle = {
  width: '180px',
  height: '200px',
};

export default Book;
