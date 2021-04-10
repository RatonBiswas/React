import React, { useState } from "react";

const Accordion = React.memo(({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  console.log("I am here!");

  const titleClicked = (index) => {
    setActiveIndex(index);
  };
  const renderItem = items.map((item, index) => {
    const activedata = index === activeIndex ? "active" : "";
    const handleClick = () => titleClicked(index);
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${activedata}`} onClick={handleClick}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${activedata}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItem}</div>;
});

export default Accordion;
