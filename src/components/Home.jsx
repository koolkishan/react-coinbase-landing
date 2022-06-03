import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from "./Button";

export default function Home() {
  return (
    <Section className="flex j-center a-center gap">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 blue">
            <span>
              <img src={badgePercent} alt="badgepercent" />
            </span>{" "}
            Investment made easy
          </h3>
        </div>
        <div className="title">
          <h1>The Easies Way to Track Multiple Currencies</h1>
        </div>
        <div className="description">
          <p className="subdue">
            Market Watchman allow you tu monitor your balances, trade without,
            limits and earn rewards for specific coins.
          </p>
        </div>
        <div className="buttons flex gap-1">
          <Button text="Try Now" icon={<FaChevronCircleRight />} />
          <Button text="How it works?" subduedButton />
        </div>
      </div>
      <div className="image">
        <img src={home} alt="home" className="half-width" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .subtitle {
      h3 {
        flex-direction: row;
      }
    }
    .buttons {
      flex-direction: row;
      margin: 2rem 0;
      gap: 1rem;
    }
  }
`;
