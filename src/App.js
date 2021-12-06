import React, { useState } from "react";
import Menu from "./Menu";
import menu from "./data";


const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const newItems = (( ) => 
    setMenuItems(newItems));
  return (
    <main>
      <section>
        <div className="title">
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;