import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";

export default function Home() {
  return (
    <Section>
      <div className="content">
        <div className="subtitle">
          <h3>
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
          <p>
            Market Watchman allow you tu monitor your balances, trade without,
            limits and earn rewards for specific coins.
          </p>
        </div>
        <div className="buttons">
          <button>
            Try Now <FaChevronCircleRight />
          </button>
          <button>How it works?</button>
        </div>
      </div>
      <div className="image">
        <img src={home} alt="home" />
      </div>
    </Section>
  );
}

const Section = styled.section``;
