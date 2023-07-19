/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h2>Questions and answer about login</h2>
        <section className="info">
          {question.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
