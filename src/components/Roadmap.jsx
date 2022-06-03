import React from "react";
import styled from "styled-components";
import {
  RiGoogleFill,
  RiAppleFill,
  RiAmazonFill,
  RiBitCoinFill,
} from "react-icons/ri";
export default function Roadmap() {
  const data = [
    {
      date: "July 2012",
      name: "Google",
      description:
        "Let's say you invested $1,000 right before the 2008 crash and left your money there. Price for Vanguard 500 Index Fund Admiral Shares $143 (VFIAX), highest ever. Dropped to $68 in 2009. Current price $430.52.",
      icon: <RiGoogleFill />,
    },
    {
      date: "July 2014",
      name: "Apple",
      description:
        "Assume you invested $1,000 in Apple, the stock price has never been higher at this point in time at $9.05. Current price $173.07.",
      icon: <RiAppleFill />,
    },
    {
      date: "July 2018",
      name: "Amazon",
      description:
        "Assume you invested $1,000 in a Tech Vanguard ETF at a $52 cost (VITAX). Current price $221.94",
      icon: <RiAmazonFill />,
    },
    {
      date: "July 2022",
      name: "Bitcoin",
      description:
        "Assume you invested $1,000 in Bitcoin. Price for one Bitcoin was $17,098, later it dropped to $3,500 per Bitcoin before bouncing to over $60,000 in 2021. Current price over $42,629.",
      icon: <RiBitCoinFill />,
    },
    {
      date: "July 2012",
      name: "Google",
      description:
        "Let's say you invested $1,000 right before the 2008 crash and left your money there. Price for Vanguard 500 Index Fund Admiral Shares $143 (VFIAX), highest ever. Dropped to $68 in 2009. Current price $430.52.",
      icon: <RiGoogleFill />,
    },
    {
      date: "July 2014",
      name: "Apple",
      description:
        "Assume you invested $1,000 in Apple, the stock price has never been higher at this point in time at $9.05. Current price $173.07.",
      icon: <RiAppleFill />,
    },
    {
      date: "July 2018",
      name: "Amazon",
      description:
        "Assume you invested $1,000 in a Tech Vanguard ETF at a $52 cost (VITAX). Current price $221.94",
      icon: <RiAmazonFill />,
    },
    {
      date: "July 2022",
      name: "Bitcoin",
      description:
        "Assume you invested $1,000 in Bitcoin. Price for one Bitcoin was $17,098, later it dropped to $3,500 per Bitcoin before bouncing to over $60,000 in 2021. Current price over $42,629.",
      icon: <RiBitCoinFill />,
    },
  ];
  return (
    <Section className="flex column gap">
      <div className="title-container text-center">
        <div className="subtitle subdue">
          <h3>Roadmap</h3>
        </div>
        <div className="title">
          <h2>How Investing Can Change Your Future</h2>
        </div>
      </div>
      <div className="roadmap flex gap">
        {data.map(({ date, name, description, icon }, index) => {
          return (
            <div className="map flex column gap-1 a-start" key={index}>
              <div className="icon flex j-center a-center">{icon}</div>
              <h3 className="date">{date}</h3>
              <h3 className="name">{name}</h3>
              <p className="description subdue">{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  .roadmap {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 4rem;
    &::-webkit-scrollbar {
      height: 1px;
    }
    .map {
      min-width: 300px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        height: 100%;
        width: 120%;
        z-index: -1;
        border-top: 3px solid white;
        opacity: 0.5;
      }
      .icon {
        background-color: var(--roadmap-icon);
        padding: 0.5rem;
        border-radius: 100%;

        svg {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;

    .roadmap {
      overflow: initial;
      padding-bottom: 2rem;
      .map {
        min-width: 100%;
      }
      .map::after {
        border-top: none;
      }
    }
  }
`;
