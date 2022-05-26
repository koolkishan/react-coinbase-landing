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
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="subtitle">
          <h3>Roadmap</h3>
        </div>
        <div className="title">
          <h2>How Investing Can Change Your Future</h2>
        </div>
      </div>
      <div className="roadmap">
        {data.map(({ date, name, description, icon }) => {
          return (
            <div className="map" key={name}>
              <div className="icon">{icon}</div>
              <h3 className="date">{date}</h3>
              <h3 className="name">{name}</h3>
              <p className="description">{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section``;
