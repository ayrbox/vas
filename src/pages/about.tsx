import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Banner from "../components/shared/Banner";
import Features from "../components/shared/Features";
import Contact from "../components/shared/Contact";

const About = () => {
  return (
    <main>
      <Banner
        title="Self taught photographer"
        description="
        I am a self taught photographer and my aim is to capture beautiful moments in the occasions of a lifetime events,
        help you share and cherish your story and memories forever through photos."
        hero={true}
        position="right"
      >
        <StaticImage
          alt="Vas Self Taught Photographer"
          src="../images/about-photo.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <Banner
        title="About myself"
        description="I am a self taught photographer based in London/Hertfordshire. By career
        I am a IT professional with many years of experience. I was always
        fascinated about photography, especially potraits of people. On way to
        quench my curiosity about photography, I establised myself as self
        taught photographer and had honour of capturing especial moments of
        people's life."
      >
        <StaticImage
          alt="Camera"
          src="../images/about-camera.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <Features complete={true} />

      <Contact />
    </main>
  );
};

export default About;
