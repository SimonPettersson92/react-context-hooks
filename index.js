import React, { useContext } from "react";
import { render } from "react-dom";
import App from './App';
import Store, { MeatContext } from './store';

const Index = () => {
    return (
      <Store>
          <App />
      </Store>
    );
};

render(<Index />, document.getElementById("root"));
