import React from "react";

const Dropdown = ({ options ,selected ,onChangeSelected}) => {
  const dropDownRender = options.map((option) => {
      if(option.value===selected.value){
          return null
      }
    return (
      <div key={option.value} className="item" onClick={()=> onChangeSelected(option)}>
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select A Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{dropDownRender}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
