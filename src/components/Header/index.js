import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import {
  HeaderContainer,
  HeaderTitle,
  NavBarHeader,
  TitleContainer,
  TitleLogo,
  NavBarLink,
  NavBarUserActiosContainer,
  LoginButtonLink,
  // NavBarHeader,
} from "./elements";

export default function Header(props) {
  const { blockSignup, blockLogin } = props;
  return (
    <HeaderContainer>
      <TitleContainer>
        <TitleLogo>S</TitleLogo>
        <HeaderTitle to="/">SortIt</HeaderTitle>
      </TitleContainer>
      {!isMobile ? (
        <NavBarHeader>
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="/features">Features</NavBarLink>
          <NavBarLink to="/services">Services</NavBarLink>
          <NavBarLink to="/about">About</NavBarLink>
        </NavBarHeader>
      ) : (
        ""
      )}
      <NavBarUserActiosContainer>
        {isMobile ? "" : <NavBarLink to="/contact">contact Sales</NavBarLink>}
        {!blockSignup ? (
          <LoginButtonLink to="/signup" color="red">
            <span>Sign Up</span>
          </LoginButtonLink>
        ) : (
          ""
        )}
        {!blockLogin ? (
          <LoginButtonLink to="/login">Log in</LoginButtonLink>
        ) : (
          ""
        )}
      </NavBarUserActiosContainer>
    </HeaderContainer>
  );
}

Header.propTypes = {
  blockSignup: PropTypes.bool,
  blockLogin: PropTypes.bool,
};
