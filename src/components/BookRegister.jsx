import { useState } from "react";
import { Book, storeBook } from "../utils/Book";

const BookRegister = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [read, setRead] = useState(false);
  const [info, setInfo] = useState("");

  return (
    <>
      <div className="container">
        <h2>book register</h2>
        <p>title</p>
        <p>author</p>
        <p>etc</p>
      </div>
    </>
  );
};

export default BookRegister;
