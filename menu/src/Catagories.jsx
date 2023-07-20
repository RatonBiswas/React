/* eslint-disable react/prop-types */
const Catagories = ({ categories, filterCategories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="btn"
            key={index}
            type="button"
            onClick={() => filterCategories(category)}
          >{category}</button>
        );
      })}
    </div>
  );
};

export default Catagories;
