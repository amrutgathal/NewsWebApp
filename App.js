import React from "react";
import "./App.css";
import News from "./Components/News";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News Website</h1>
      </header>
      <main>
        <News />
      </main>
    </div>
  );
}

export default App;
