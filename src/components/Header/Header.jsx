import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import {
  HeaderWrapper,
  HeaderInner,
  LogoSection,
  LogoImg,
  LogoText,
  Nav,
  NavItem,
  RightSection,
  UserProfile,
  Avatar,
  UserName,
  MenuIcon,
} from "./Header.styles";

import aghLogo from "../../assets/agh-logo.png";
import profileLogo from "../../assets/profileLogo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <MenuIcon>
          <IoMenu size={33} />
        </MenuIcon>

        <LogoSection>
          <LogoImg src={aghLogo} alt="Aptitude Guru" />
        </LogoSection>

        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Practice</NavItem>
          <NavItem>Notes</NavItem>
          <NavItem>
            Assessment <MdKeyboardArrowDown size={20} />
          </NavItem>

          <NavItem>Leaderboard</NavItem>
          <NavItem active>Company Specific</NavItem>
        </Nav>

        <RightSection>
          <UserProfile>
            <Avatar src={profileLogo} alt="User" />
            <UserName>
              Hi, Muskan <AiOutlineCaretDown size={12} />
            </UserName>
          </UserProfile>
        </RightSection>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
