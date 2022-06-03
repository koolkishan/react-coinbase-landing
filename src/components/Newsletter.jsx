import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
export default function Newsletter() {
  return (
    <Section className="flex j-between a-center gap">
      <div className="title-container flex column gap-1">
        <h2>Newsletter</h2>
        <h3 className="subdue">
          Get now free 20% discount for all products on your first order
        </h3>
      </div>
      <div className="newsletter flex j-center a-center gap-2">
        <div className="input-container flex j-center a-center gap-1">
          <AiOutlineMail />
          <input type="text" placeholder="Enter your email address" />
        </div>
        <Button text="Subscribe" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0;
  margin-bottom: 8rem;
  background-color: var(--dark-background);
  padding: 8rem;
  .newsletter {
    .input-container {
      background-color: var(--input-background);
      padding: 1rem;
      padding-right: 8rem;
      border-radius: 0.5rem;
      font-size: 1.3rem;
      color: white;
      input {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        color: white;
        &:focus {
          outline: none;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;
    margin-bottom: 2rem;
    .newsletter {
      .input-container {
        flex-direction: row;
        padding-right: 1rem;
        input {
        }
      }
    }
  }
`;
