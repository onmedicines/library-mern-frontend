import { useLoaderData } from "react-router-dom";
import Book from "../components/Book";

export default function AllBooks() {
  const books = useLoaderData();

  return (
    <div className="all-books-container">
      {books.map((book) => (
        <Book key={book._id} bookName={book.name} author={book.author} imgurl={"bookcover.jpg"} />
      ))}
    </div>
  );
}

// loader
export const booksLoader = async () => {
  const apiResponse = await fetch("https://library-mern-backend.onrender.com/all-books");
  return await apiResponse.json();
};
