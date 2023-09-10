import React from "react";

function Intro() {
  return (
    <section className="flex justify-around py-40 ">
      <span className="flex flex-col justify-center w-[40%]">
        <h1 className="text-6xl mb-3">
          Shreerama Shiva Sai Bharadwaja's Portfolio
        </h1>
        <h3 className="text-4xl mb-5">Mechanical Engineer</h3>
        <p className="text-2xl ">
          My journey began with exploration and has now become a thriving
          career. Proficient in both programming and mechanical projects with
          electronic hardware, I'm eager to apply my skills in research,
          contributing to innovative ventures across programming and engineering
          domains.{" "}
        </p>
      </span>
      <span>
        <img
          src="assets/Profile/RAMA.jpeg"
          alt="My Profile Pic"
          style={{ width: 450, height: 450 }}
          className="rounded-full"
        />
      </span>
    </section>
  );
}

export default Intro;
