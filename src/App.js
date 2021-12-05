import React from "react";
import menu from "./menu";
import MenuItems from "./data";

function App () {
  return (
    <div>
      <div className={menu}>
    <menu />
    <div className={MenuItems}>
     <MenuItems/>
     </div>
    </div>
    </div>
  
  );

};

export default App;