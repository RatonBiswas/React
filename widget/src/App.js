/* eslint-disable import/no-anonymous-default-export */
import React from "react";
// import Accordion from "./components/Accordion";
// import Test from "./components/Test";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const App = () => {
  


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

  // const options = [
  //   {
  //     label: 'The Color Red',
  //     value: 'Red'
  //   },
  //   {
  //     label:'The Color Green',
  //     value: 'Green'
  //   },
  //   {
  //     label:'The Color Yellow',
  //     value: 'Yellow'
  //   }
  // ]
  // const [selected, setSelected] = useState(options[0])
  // const [showDropdown,setShowDropdown] = useState(true)
  return (
    <div>
      {/* <button
        onClick={() =>setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>
      <Accordion items={items} />
      <Search/>
      <Dropdown selected={selected} onChangeSelected={setSelected} options={options}/> */}
      <Translate/>
  
    </div>
  );
};
export default App;
