import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Banner from "../components/shared/Banner";
import { StaticImage } from "gatsby-plugin-image";
import StoryCard from "../components/shared/StoryCard";
import Features from "../components/shared/Features";
import { Story } from "../types";

export interface HomeProps {
  data: {
    allStoriesYaml: {
      edges: Array<{ node: Story }>;
    };
  };
}

const Home = ({ data }: HomeProps) => {
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
          alt="Featured Wedding"
          src="../images/feature-wedding.jpg"
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
          alt="Wedding Ring"
          src="../images/ring.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <StoriesList>
        {data?.allStoriesYaml?.edges.map(({ node }) => (
          <StoryCard
            key={node.id}
            title={node.name}
            image={node?.thumbnail?.childImageSharp?.image}
            category={node.category}
            date={node.date}
            url={node.url}
          />
        ))}
      </StoriesList>
      <Features complete={false} />
    </main>
  );
};

export default Home;

export const query = graphql`
  query HomeStories {
    allStoriesYaml(limit: 4, skip: 8) {
      edges {
        node {
          name
          id
          category
          date
          url
          thumbnail {
            id
            childImageSharp {
              image: gatsbyImageData(
                width: 500
                height: 500
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
    }
  }
`;

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
