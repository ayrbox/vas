import React from "react";
import styled from "styled-components";

import Banner from "../components/shared/Banner";
import { StaticImage } from "gatsby-plugin-image";
import StoryCard from "../components/shared/StoryCard";
import Features from "../components/shared/Features";

const Home = () => {
  return (
    <main>
      <Banner
        title="Capture and tresure your photo memories."
        description="I help you capture stories of your life events. You can tresure and share it with friends and family."
        hero={true}
        link={{
          label: "Learn more",
          url: "/contact",
        }}
      >
        <StaticImage
          alt="Ring"
          src="../images/ring.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <Banner
        position="right"
        title="Beautiful stories every time"
        description="I have years of experience in photography. I understand the emotion behind the photo and video."
        link={{
          label: "Learn more",
          url: "/contact",
        }}
      >
        <StaticImage
          alt="Doggo"
          src="../images/dog-photo.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <StoriesList>
        {[
          {
            title: "Weddings",
            author: "Weddings and Engagements",
            image: (
              <StaticImage
                alt="Weddings"
                src="../images/wedding.jpg"
                objectFit="cover"
                placeholder="tracedSVG"
                style={{ height: "100%", width: "100%" }}
              />
            ),
          },
          {
            title: "Christenings",
            author: "Christenings",
            image: (
              <StaticImage
                alt="Ring"
                src="../images/christenings.jpg"
                objectFit="cover"
                placeholder="tracedSVG"
                style={{ height: "100%", width: "100%" }}
              />
            ),
          },
          {
            title: "Events",
            author: "Private and public events",
            image: (
              <StaticImage
                alt="Ring"
                src="../images/events.jpg"
                objectFit="cover"
                placeholder="tracedSVG"
                style={{ height: "100%", width: "100%" }}
              />
            ),
          },
          {
            title: "Photoshoots",
            author: "Personal and offical photo shoots.",
            image: (
              <StaticImage
                alt="Ring"
                src="../images/cake-smash.jpg"
                objectFit="cover"
                placeholder="tracedSVG"
                style={{ height: "100%", width: "100%" }}
              />
            ),
          },
        ].map((data) => (
          <>
            <StoryCard
              key={data.title}
              image={data.image}
              title={data.title}
              author={data.author}
            />
          </>
        ))}
      </StoriesList>
      <Features complete={false} />
    </main>
  );
};

export default Home;

const StoriesList = styled.ul`
  list-style: none;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
