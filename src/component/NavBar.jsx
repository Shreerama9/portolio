import React from "react";
import { navItems } from "../constants";

function NavBar() {
  return (
    <div className="h-20 bg-stone-950 mb-3 text-zinc-300 text-4xl shadow-xl shadow-gray-900">
      <ul className="flex justify-start items-center h-[100%]">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`mx-5 ${
              item.text == "Contact" || item.text == "Projects"
                ? item.text == "Projects"
                  ? "font-bold text-gray-600"
                  : "ml-auto font-bold"
                : "text-zinc-500 font-bold "
            }`}
          >
            <a href="#"> {item.text} </a>
          </li>
        ))}
        
        


      </ul>
    </div>
  );
}

export default NavBar;
