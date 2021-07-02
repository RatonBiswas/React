import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;
  render() {
    // const text = this.context === "english" ? "Submit" : "জমা দিন";
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "জমা দিন")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
export default Button;
