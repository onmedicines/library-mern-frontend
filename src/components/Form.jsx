import { useState } from "react";

export default function Form() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "bookName") setBookName(value);
    if (name === "author") setAuthor(value);
    if (name === "pages") setPages(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { bookName, author, pages };

    try {
      const apiResponse = await fetch("http://localhost:3000", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseObject = await apiResponse.json();
      console.log(responseObject.message);

      // reset inputs
      setBookName("");
      setAuthor("");
      setPages("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="form-container">
      <h1>Add New Book to Database</h1>
      <form autoComplete="off">
        <label htmlFor="bookName">
          <span>Book:</span>
          <input type="text" name="bookName" id="bookName" placeholder="eg. Harry Potter" value={bookName} onChange={handleChange} />
        </label>
        <label htmlFor="authorName">
          <span>Author:</span>
          <input type="text" name="author" id="author" placeholder="eg. JK Rowling" value={author} onChange={handleChange} />
        </label>
        <label htmlFor="pages">
          <span>Pages:</span>
          <input type="number" name="pages" id="pages" value={pages} onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
}
