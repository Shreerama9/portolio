import React from "react";

const Footer = () => {
  const socialLinkStyle = {
    display: "flex",
    justifyContent: "space-between", // Distribute icons evenly
    alignItems: "center", // Center vertically
    width: "1550px", // Set the container width
    margin: "0 auto 30px", // Center horizontally
    flexWrap: "wrap", // Wrap if there are more than 5 icons
  };

  const linkStyle = {
    textDecoration: "none",
    flex: "0 0 calc(100% / 5)", // Distribute icons equally
    textAlign: "center", // Center text
    margin: "0 0", // Adjust the space between icons as needed
  };

  return (
    <footer>
      <h3
        className={"w-[1550px] text-center font-semibold text-5xl mx-auto my-7"}
      >
        Connect with me:
      </h3>
      <div style={socialLinkStyle} className="social-links text-3xl">
        <a
          href="https://www.linkedin.com/in/shreerama9"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/shreerama9"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="mailto:srssbvs007@gmail.com" style={linkStyle}>
          <i className="far fa-envelope"></i> Email
        </a>
        <a
          href="https://www.cloudskillsboost.google/public_profiles/127efeb6-a583-431a-9989-2cc0a14ab84b"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <i className="fab fa-google"></i> Google Cloud
        </a>
        <a
          href="https://www.kaggle.com/shreerama9"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <i className="fab fa-kaggle"></i> Kaggle
        </a>
      </div>
    </footer>
  );
};

export default Footer;
