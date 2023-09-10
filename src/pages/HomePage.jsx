import React from "react";
import {
  Intro,
  Project,
  Work,
  Skills,
  Achievement,
  Footer,
} from "../container";

function HomePage() {
  return (
    <div>
      <Intro />
      <Work />
      <Project />
      <Skills />
      <Achievement />
      <Footer />
    </div>
  );
}

export default HomePage;
