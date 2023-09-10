import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { projectImages } from "../constants";
function Project() {
  return (
    <div className="mx-auto w-[1550px]">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry gutter="30px">
          {projectImages.map((item) => (
            <div
              className={`rounded-lg bg-gradient-to-r from-sky-700 to-sky-950 w-[750px] h-[800px] p-[25px] ${
                item.id == 2 ? "mt-40" : ""
              }`}
            >
              <h1 className="text-5xl text-neutral-200 my-3 text-center">
                {item.projectName}
              </h1>

              <img
                src={item.img}
                alt="img"
                className="w-[700px] h-[40%] mb-10 rounded-md shadow-md shadow-slate-400"
              />
              <p className="text-xl">
                {item.projectDetails}
              </p>
            </div>
          ))}
        </Masonry>
        {/* <Masonry gutter="30px">
          {projectImages.map((item) => (
            <img
              style={{ width: "450px", height: "750px" }}
              className="rounded-md shadow-md shadow-slate-50"
              src={item.img}
              alt={item.alt}
            />
          ))}
        </Masonry> */}
      </ResponsiveMasonry>
    </div>
  );
}

export default Project;
