import data from "./Data";
import List from "./List";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
