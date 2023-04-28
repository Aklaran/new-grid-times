import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopButtonGroup>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopButtonGroup>
        <Logo />
        <RightDesktopButtonGroupWrapper>
          <RightDesktopButtonGroup>
            <Button>Subscribe</Button>
            <LoginLink href="">Already a subscriber?</LoginLink>
          </RightDesktopButtonGroup>
        </RightDesktopButtonGroupWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    align-items: center;

    margin-block-start: 16px;
    margin-block-end: 72px;
  }
`;

const DesktopButtonGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    flex: 1;
  }
`;

const Spacer = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    flex: 1;
  }
`;

const RightDesktopButtonGroupWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: last baseline;

    flex: 1;
  }
`;

const RightDesktopButtonGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: last baseline;
  }
`;

const LoginLink = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  text-decoration: underline;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16}rem;
  text-align: center;
`;

export default Header;
