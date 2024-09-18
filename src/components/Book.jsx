export default function Book({ bookName, author, imgurl }) {
  return (
    <div className="book-container">
      <img src={imgurl} alt="book" />
      <h1>{bookName}</h1>
      <p>by {author}</p>
    </div>
  );
}
