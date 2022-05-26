import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
export default function Newsletter() {
  return (
    <Section>
      <div className="title-container">
        <h2>Newsletter</h2>
        <h3>Get now free 20% discount for all products on your first order</h3>
      </div>
      <div className="newsletter">
        <div className="input-container">
          <AiOutlineMail />
          <input type="text" placeholder="Enter your email address" />
        </div>
        <button>Subscribe</button>
      </div>
    </Section>
  );
}

const Section = styled.section``;
