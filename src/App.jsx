import React from "react";
import { NavBar } from "./component";
import { HomePage } from "./pages";
function App() {
  return (
    <React.Fragment>
      <div className="bg-slate-900">
        <HomePage />
      </div>
    </React.Fragment>
  );
}

export default App;
