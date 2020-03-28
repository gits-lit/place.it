import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.less";

import MapPage from "./containers/MapPage";

const App = () => {
  return (
    <div className="App">
      <MapPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
