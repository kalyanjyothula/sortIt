import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  box-shadow: var(--light-shadow);
  /* border: 1px solid red; */
  transition: var(--transition);
  /* background: var(--clr-primary-2); */
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  /* align-items: center; */
  /* border: 1px solid red; */
`;

export const TitleLogo = styled.span`
  display: inline-flex;
  background: var(--clr-primary-3);
  width: 35px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  font-weight: 500;
  font-size: 2rem;
  margin: 8px 0;
  text-transform: uppercase;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
  color: #fff;
  /* border: 1px solid red; */
`;

export const HeaderTitle = styled(Link)`
  letter-spacing: 0.18rem;
  text-decoration: none;
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  margin: 2px;
  cursor: pointer;
  color: #000;
  :hover {
    color: #000;
  }
  /* border: 1px solid red; */
`;

export const NavBarHeader = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  /* border: 1px solid red; */
  /* flex-grow: 1; */
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--clr-grey-2);
  font-weight: 500;
  text-transform: capitalize;
`;

export const NavBarUserActiosContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
`;

export const LoginButtonLink = styled(Link)`
  height: 30px;
  width: 75px;
  display: block;
  background: ${({ color }) => (color ? color : "#0d6efd")};
  text-align: center;
  text-decoration: none;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.9rem;
  padding-top: 0.25rem;
  transition: all 0.5s ease;
  :hover {
    color: #fff;
    margin-top: 2px;
    box-shadow: rgba(98, 57, 121, 0.3) 0px 1px 5px 0px;
  }
`;
