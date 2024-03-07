import { useState } from "react";
import BookRegister from "./components/BookRegister";
import "./styles/css/styles.css";
import ShowLibrary from "./components/ShowLibrary";

function App() {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <>
      <header>
        <div className="container text-center">
          <h1 className="main-title">My Library</h1>
        </div>
      </header>
      <div className="container">
        <div className="button-container text-center">
          <button
            className="btn btn-secondary m-2"
            onClick={() => setShowRegister(!showRegister)}
          >
            {showRegister ? "Show Library" : "Register New Book"}
          </button>
        </div>
        {showRegister ? <BookRegister /> : <ShowLibrary />}
      </div>
    </>
  );
}

export default App;
