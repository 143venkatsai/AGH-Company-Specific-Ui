import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 73px;
  background: ${(props) => props.theme.body.primary.base};
  border-bottom: 1px solid ${(props) => props.theme.border.primary};
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 1024px) {
    height: 58px;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1980px;
  margin: 0 auto;
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // Tab View
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 24px;
    justify-content: flex-start;
    gap: 10px;
  }

  // Mobile View
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 8px;
    padding: 0 16px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImg = styled.img`
  width: 160px;
  height: 44px;

  @media (max-width: 1024px) {
    width: 120px;
    height: 33px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  color: ${(props) => props.theme.text.neutral20};
  cursor: pointer;
  position: relative;

  ${({ $active }) =>
    $active &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #FD6A7F;
    }
  `}
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.text.neutral20};

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  span {
    width: 20px;
    height: 2px;
    background: #000;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;
