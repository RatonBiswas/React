import { useState } from "react";

const UseUseStateObject = () => {
  const [name, setName] = useState("raton");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("reading");
  const changeObject = () => {
    setName("john");
    setAge(25);
    setHobby("Watching Movies");
  };
  return (
    <div>
      <h2>{name}</h2>
      <h4>{age}</h4>
      <h4>{hobby}</h4>
      <button className="btn" type="button" onClick={changeObject}>
        Change to John
      </button>
    </div>
  );
};

export default UseUseStateObject;
