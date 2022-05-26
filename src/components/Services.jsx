import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

export default function Services() {
  const servicesData = [
    {
      image: service1,
      title: "Manage your portfolio",
      descrption:
        "Coinbase supports a variety of the most popular digital currencies.",
    },
    {
      image: service2,
      title: "Recurring buys",
      descrption:
        "Coinbase supports a variety of the most popular digital currencies.",
    },
    {
      image: service3,
      title: "Mobile apps",
      descrption:
        "Coinbase supports a variety of the most popular digital currencies.",
    },
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h2>Start your trading with us</h2>
        </div>
        <div className="subtitle">
          <h3>
            Market Watchmen has a variety of features that make it the best
            place to start trading
          </h3>
        </div>
      </div>
      <div className="services">
        {servicesData.map(({ image, title, descrption }) => {
          return (
            <div className="service" key={title}>
              <div className="image">
                <img src={image} alt="servive" />
              </div>
              <h3 className="title">{title}</h3>
              <h5 className="description">{descrption}</h5>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section``;
