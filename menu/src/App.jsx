/* eslint-disable no-unused-vars */
import { useState } from "react";
import items from "./data";
import Categories from "./Catagories";
import Menu from "./Menu";
import Title from "./Title";
const allCategories =['all', ...new Set(items.map((item) => item.category))]; // javascript nuggets
console.log(allCategories);
function App() {
  const [menuItems, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newCategory = items.filter((item) => item.category === category);
    console.log(newCategory);
    setMenuItem(newCategory);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterCategories={filterCategory} />
        <Menu items={menuItems} />
        {/* {menuItems.map((menu) => {
          return <Menu key={menu.id} {...menu} />;
        })} */}
      </section>
    </main>
  );
}

export default App;
