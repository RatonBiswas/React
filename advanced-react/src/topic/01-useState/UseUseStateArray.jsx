import { useState } from "react";
import { data } from "../../data";

const UseUseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <h3>This is from useState</h3>
      {people.map((people) => {
        const { id, name } = people;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
};

export default UseUseStateArray;
