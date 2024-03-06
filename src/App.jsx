import BookRegister from "./components/BookRegister";
import "./styles/css/styles.css";

function App() {
  return (
    <>
      <header>
        <div className="container text-center">
          <h1 className="main-title">My Library</h1>
        </div>
      </header>
      <BookRegister />
    </>
  );
}

export default App;
