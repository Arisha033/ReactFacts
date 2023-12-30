import { useState } from "react";
import { Navbar } from "./assets/Components/Navbar";
import { Main } from "./assets/Components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <>
      <div className="container">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Main darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
