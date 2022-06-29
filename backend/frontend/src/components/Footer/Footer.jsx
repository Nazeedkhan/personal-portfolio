import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, My name is Nazeed khan. I am a Full-Stack Web Developer and a
          Programmer. Programming Languages on which I usually work upon are <b> C </b>,
          <b>C++ </b>, <b>Java </b>, <b>Python </b> and <b>Javascript</b> . If you want to Contact me then just click on the below button.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a
          href="https://github.com/Nazeedkhan?tab=repositories"
          target="black"
        >
          <BsGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/19373206/nazeed-khan"
          target="black"
        >
          <BsStackOverflow />
        </a>
        <a
          href="https://www.instagram.com/nazeedkhan7785/"
          target="black"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/nazeed-khan-21216223a/"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
