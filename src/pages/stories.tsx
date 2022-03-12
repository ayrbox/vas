import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/stories/Hero";

const Stories = ({ data }) => {
  return (
    <main>
      <Hero />
      <div>
        <pre style={{ backgroundColor: "white" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </main>
  );
};

export const query = graphql`
  query StoriesQuery {
    allStoriesYaml {
      edges {
        node {
          description
          name
          id
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 400, height: 400)
            }
          }
        }
      }
    }
  }
`;

export default Stories;
