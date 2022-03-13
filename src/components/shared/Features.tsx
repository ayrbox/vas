import React from "react";
import styled from "styled-components";

import ResponsiveIcon from "../../assets/features/responsive.svg";
import NoLimitIcon from "../../assets/features/no-limit.svg";
import EmbededIcon from "../../assets/features/embed.svg";
import CustomDomainIcon from "../../assets/features/custom-domain.svg";
import BoostExposureIcon from "../../assets/features/boost-exposure.svg";
import DragDropIcon from "../../assets/features/drag-drop.svg";

interface FeaturesProps {
  complete: boolean;
}

export default function Features({ complete }: FeaturesProps) {
  const completeList = [
    {
      image: <ResponsiveIcon />,
      title: "Printed Images",
      description:
        "Printed images can be purchased directly from your personal online gallery.",
    },
    {
      image: <NoLimitIcon />,
      title: "Unlimited Hosting",
      description:
        "Hosted securely in a private password protected gallery via personal website.",
    },
    {
      image: <EmbededIcon />,
      title: "Video Montage",
      description: "A video montage of selected images will be created.",
    },
    {
      image: <CustomDomainIcon />,
      title: "Photo Access",
      description: "You can securely access your photo from my website.",
    },
    {
      image: <BoostExposureIcon />,
      title: "Touch Up",
      description:
        "Your photos will be touched up to make sure you get quality photos.",
    },
    {
      image: <DragDropIcon />,
      title: "USB Stick",
      description:
        "You can get your photo delivered in USB Stick or Memory Card at £70 additional cost.",
    },
  ];
  const partialList = [
    {
      image: <ResponsiveIcon />,
      title: "Printed Images",
      description:
        "Printed images can be purchased directly from your personal online gallery.",
    },
    {
      image: <NoLimitIcon />,
      title: "Unlimited Hosting",
      description:
        "Hosted securely in a private password protected gallery via personal website.",
    },
    {
      image: <EmbededIcon />,
      title: "Video Montage",
      description: "A video montage of selected images will be created.",
    },
  ];
  const list = complete ? completeList : partialList;

  return (
    <Container className={`${complete && "complete"}`}>
      {list.map(({ title, description, image }) => (
        <Feature key={title}>
          <Illustration>{image}</Illustration>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Feature>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  background: ${(props) => props.theme.colors.white};
  padding: 8rem 24px;
  list-style: none;
  display: grid;
  gap: 5.6rem;
  text-align: center;

  &.complete {
    padding: 6.4rem 24px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 12rem 24px;

    li:last-of-type {
      grid-column: 1 /3;
    }

    &.complete {
      padding: 11.2rem 24px;

      li:last-of-type {
        grid-column: unset;
      }
    }
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);

    li:last-of-type {
      grid-column: unset;
    }

    &.complete {
      padding: 16rem 24px;
    }
  }
`;

const Feature = styled.li`
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Illustration = styled.div`
  width: 72px;
  height: 72px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin: 4rem 0 1.6rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 167%;
  opacity: 0.6;
  max-width: 40ch;
  margin: auto;
`;
