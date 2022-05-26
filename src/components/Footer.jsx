import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import spacemen from "../assets/spacemen.png";
import cards from "../assets/cards.png";
export default function Footer() {
  const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
  ];
  const LearnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Turoials",
    "Market Updates",
    "What is Bitcoin?",
    "What is crypto?",
    "What is a blockchain?",
    "How to set up a crypto waller",
    "How to send crypto",
  ];
  const Company = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie Privacy",
    "Cookie preferences",
  ];
  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];
  return (
    <Foot>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <h2>Coinbase</h2>
          </div>
          <div className="address">
            <p>GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022</p>
          </div>
          <div className="info">
            <span>T : +1-202-555-0184</span>
            <span>E : hello@cryptoz.com</span>
          </div>
          <div className="social-icons">
            {socialIcons.map((icon, index) => {
              return (
                <div className="icon" key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col">
          <div className="title">
            <h3>Company</h3>
            <ul>
              {companyLinks.map((link) => {
                return <li key={link}>{link}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="title">
            <h3>Learn</h3>
            <ul>
              {LearnLinks.map((link) => {
                return <li key={link}>{link}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img src={spacemen} alt="spacemen" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="col1">
          <span>&copy; Crypto a Theme by Kishan Sheth</span>
        </div>
        <div className="col2">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>
            <img src={cards} alt="cards" />
          </span>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.section``;
