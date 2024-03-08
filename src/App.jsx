import { useState } from "react";
import BookRegister from "./components/BookRegister";
import ShowLibrary from "./components/ShowLibrary";
import "./styles/css/styles.css";

function App() {
  const [activeSection, setActiveSection] = useState("register");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <header>
        <div className="container text-center">
          <h1 className="main-title">My Library</h1>
        </div>
      </header>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-2 sidebar">
            <ul className="text-center">
              <li
                onClick={() => handleSectionChange("register")}
                className={
                  activeSection === "register"
                    ? "active btn btn-primary sidebar-btn"
                    : "btn btn-primary sidebar-btn"
                }
              >
                Register New Book
              </li>
              <li
                onClick={() => handleSectionChange("library")}
                className={
                  activeSection === "library"
                    ? "active btn btn-primary sidebar-btn"
                    : "btn btn-primary sidebar-btn"
                }
              >
                Show Library
              </li>
            </ul>
          </div>
          <div className="col-md-10 content mb-5">
            {activeSection === "register" && <BookRegister />}
            {activeSection === "library" && <ShowLibrary />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
