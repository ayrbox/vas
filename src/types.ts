import { IGatsbyImageData } from "gatsby-plugin-image";
export type Story = {
  id: string;
  name: string;
  category: string;
  date?: string;
  url: string;
  thumbnail: {
    id: string;
    childImageSharp: {
      image: IGatsbyImageData;
    };
  };
};

export type Price = {
  id: string;
  title: string;
  description?: string;
  duration?: string;
  price: number;
};
