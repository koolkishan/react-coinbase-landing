import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";

import about from "../assets/about.png";
export default function AboutUs() {
  return (
    <Section>
      <div className="image">
        <div className="content">
          <div className="title-container">
            <div className="subtitle">
              <h3>About Us</h3>
            </div>
            <div className="title">
              <h2>Why would You Choose Market Watchmen?</h2>
            </div>
          </div>
          <div className="info">
            <p>Easy To Learn Platform –</p>
            <p>
              We won’t ask you to link to your bank accounts, we just want
              everyone to have the opportunity to understand the potential of
              saving and investing for retirement or short term goals. We simply
              do data analytics and simplify the way you look at investment
              assets
            </p>
            <button>
              Start Earning <FaChevronCircleRight />
            </button>
          </div>
        </div>
        <img src={about} alt="about" />
      </div>
    </Section>
  );
}
const Section = styled.section``;
