import React from "react";
import ReactDom from "react-dom/client";
import Menu from "./menu.json"

console.log(Menu);


function App() {
  return (
    <div>
      <ul>
        {Menu["ramen"].map((ramen) => <li>{ramen.name}</li>)}
      </ul>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
