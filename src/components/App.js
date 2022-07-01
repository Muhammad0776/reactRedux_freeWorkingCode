import React from "react";
import { Switch, Route } from "react-router-dom";
import Counter from "./Counter";

const App = () => {
  return (
    <Switch>
      <Route>
        <Counter />
      </Route>
    </Switch>
  );
};

export default App;
