/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showMore && <p>{info}</p>}
    </article>
  );
};

export default Question;
