import React from "react";
import Segment from "./Segment"

const PdfSegment = () => {
  return (
    <div>
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
        </div>
        <div className="ui primary button">Add Document</div>
      </Segment>
      <Segment>
        <h4 className="ui header"> For Your Information</h4>
        <p>
          Reuse very easily in the future without necessarily having to memorize
          these class name.
        </p>
      </Segment>
    </div>
  );
};

export default PdfSegment;
