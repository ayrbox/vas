import React from "react";
import styled from "styled-components";

import Banner from "../components/shared/Banner";
import { StaticImage } from "gatsby-plugin-image";
// import StoryCard from "../components/shared/StoryCard";
// import Features from "../components/shared/Features";

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
      {/* {[
        {
          position: "left",
          title: "Capture and tresure your photo memories. ",
          description:
          hero: true,
          image: "ring.jpg",
          link: "invite",
        },
        {
          position: "right",
          title: "BEAUTIFUL STORIES EVERY TIME",
          description:
            "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
          hero: false,
          // image: beautifulStories.src,
          // blur: beautifulStories.blurDataURL,
          link: "story",
        },
        {
          position: "left",
          title: "DESIGNED FOR EVERYONE",
          description:
            "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
          hero: false,
          // image: designedEveryone.src,
          // blur: designedEveryone.blurDataURL,
          link: "story",
        },
      ].map((data) => (
        <Banner
          key={data.link}
          position={data.position}
          title={data.title}
          description={data.description}
          hero={data.hero}
          image={data.image}
          link={data.link}
        >
          <StaticImage
            alt={data.title}
            src={`../../images/ring.jpg`}
            objectFit="cover"
            placeholder="tracedSVG"
          />
        </Banner>
      ))} */}

      <StoriesList>
        {[
          {
            // image: theMountains,
            title: "The Mountains",
            author: "John Appleseed",
          },
          {
            // image: cityEscapes,
            title: "Sunset Cityscapes",
            author: "Benjamin Cruz",
          },
          {
            // image: daysVoyage,
            title: "18 Days Voyage",
            author: "Alexei Borodin",
          },
          {
            // image: architecturals,
            title: "Architecturals",
            author: "Samantha Brooke",
          },
        ].map((data) => (
          <>
            <pre>{JSON.stringify(data)}</pre>
            {/* <StoryCard
              key={data.title}
              image={data.image}
              title={data.title}
              author={data.author}
            /> */}
          </>
        ))}
      </StoriesList>

      {/* <Features complete={false} /> */}
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
