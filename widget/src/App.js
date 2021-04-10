/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
// import Accordion from "./components/Accordion";
import Test from "./components/Test";
import Search from "./components/Search";
const App = () => {
  const [test, setTest] = useState(0);

  let value = 1;

//   const items = React.useMemo(
//     () => [
//       {
//         title: "What is React",
//         content: "React is a front end  framework of react",
//       },
//       {
//         title: "Why use React",
//         content: "React is a favourite Js Library among engineers",
//       },
//       {
//         title: "How do you use React",
//         content: "You use React by creating components",
//       },
//     ],
//     [],
//   );

  return (
    <div>
      <button
        onClick={() => {
          setTest(test + 1);
        }}
      >
        {test}Click
      </button>
      {/* <Accordion items={items} /> */}
      <Search/>
      <Test value={value} />
    </div>
  );
};

export default App;
