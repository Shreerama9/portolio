import React from "react";
import { skills } from "../constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function Skills() {
  return (
    <div className="mx-auto w-[1550px] ">
      <h1 className="text-7xl my-10 mx-10 text-center text-zinc-100">
        Skills Used :
      </h1>
      <ResponsiveMasonry
        ponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 8 }}
      >
        <Masonry gutter="10px">
          {skills.map((item) => (
            <div
              className={`rounded-md bg-sky-900 w-[185px] h-[70px] p-[5px] text-lg text-center `}
            >
              <p>{item.title}</p>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Skills;
