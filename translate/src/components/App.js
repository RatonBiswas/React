import React, { Component } from "react";
import UserCreate from "./UserCreate";
// import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
