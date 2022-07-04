import React from "react";
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
  return (
    <HeaderContainer>
      <TitleContainer>
        <TitleLogo>S</TitleLogo>
        <HeaderTitle>SortIt</HeaderTitle>
      </TitleContainer>
      <NavBarHeader>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/features">Features</NavBarLink>
        <NavBarLink to="/services">Services</NavBarLink>
        <NavBarLink to="/about">About</NavBarLink>
      </NavBarHeader>
      <NavBarUserActiosContainer>
        <NavBarLink to="/contact">contact Sales</NavBarLink>
        <LoginButtonLink to="/signup" color="red">
          <span>Sign Up</span>
        </LoginButtonLink>
        <LoginButtonLink to="/login">Log in</LoginButtonLink>
      </NavBarUserActiosContainer>
    </HeaderContainer>
  );
}
