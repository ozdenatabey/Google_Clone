import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routers } from "./components/Routers";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routers />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
