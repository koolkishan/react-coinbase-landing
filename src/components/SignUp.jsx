import React from "react";
import styled from "styled-components";
import card from "../assets/card.png";
export default function SignUp() {
  return (
    <Section>
      <div className="content">
        <h2>Sign up without any bank account linking and card</h2>
      </div>
      <div className="image">
        <img src={card} alt="card" />
      </div>
    </Section>
  );
}
const Section = styled.section``;
