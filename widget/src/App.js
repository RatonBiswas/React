/* eslint-disable import/no-anonymous-default-export */
import React ,{useState} from "react";
import Accordion from "./components/Accordion";
// import Test from "./components/Test";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
const App = () => {
  const items = React.useMemo(
    () => [
      {
        title: "What is React",
        content: "React is a front end  framework of react",
      },
      {
        title: "Why use React",
        content: "React is a favourite Js Library among engineers",
      },
      {
        title: "How do you use React",
        content: "You use React by creating components",
      },
    ],
    [],
  );

  const options = [
    {
      label: "The Color Red",
      value: "Red",
    },
    {
      label: "The Color Green",
      value: "Green",
    },
    {
      label: "The Color Yellow",
      value: "Yellow",
    },
  ];
  const [selected, setSelected] = useState(options[0])
  // const [showDropdown,setShowDropdown] = useState(true)
  // const showAccordion = () => {
  //   if (window.location.pathname === "/") {
  //     return <Accordion items={items} />;
  //   }
  // };

  // const showList = () => {
  //   if (window.location.pathname === "/list") {
  //     return <Search />;
  //   }
  // };

  // const showDropdown = () => {
  //   if (window.location.pathname === "/dropdown") {
  //     return <Dropdown />;
  //   }
  // };

  // const showTraslate = () => {
  //   if (window.location.pathname === "/translate") {
  //     return <Translate />;
  //   }
  // };
  return (
    <div>
      {/* <button
        onClick={() =>setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>
      <Accordion items={items} />
      <Search/>
      <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/> */}

      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTraslate()} */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
