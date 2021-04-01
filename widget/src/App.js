/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Accordion from "./components/Accordion";
export default () => {
    const items = [
        {
            title : 'What is React',
            content : 'React is a front end  framework of react'
        },
        {
            title : 'Why use React',
            content : 'React is a favourite Js Library among engineers'
        },
        {
            title : 'How do you use React',
            content : 'You use React by creating components'
        }
    ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
