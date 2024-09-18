export default function Form() {
  return (
    <div className="form-container">
      <form action="/" method="post">
        <label htmlFor="bookName">
          <span>Book:</span>
          <input type="text" name="bookName" id="bookName" placeholder="eg. Harry Potter" />
        </label>
        <label htmlFor="authorName">
          <span>Author:</span>
          <input type="text" name="authorName" id="authorName" placeholder="eg. JK Rowling" />
        </label>
        <label htmlFor="pages">
          <span>Pages:</span>
          <input type="number" name="pages" id="pages" />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
