import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES, COLORS } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, auto);
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0, 1fr);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 24px;
    margin-right: -24px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    max-width: 100%;
    overflow: auto;

    & > * {
      min-width: 220px;
    }
  }
`;

export default SpecialtyStoryGrid;
