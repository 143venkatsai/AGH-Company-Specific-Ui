import styled from "styled-components";

export const CompanyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${(props) => props.theme.body.primary.base};

  /* Large desktops */
  max-width: 1400px;

  /* Laptops */
  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  /* Tablets */
  @media (max-width: 1024px) {
    max-width: 960px;
    padding: 32px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TabsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    order: 2;
  }
`;

export const TestMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const PracticeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PracticeTabTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  font-style: semi-bold;
  font-family: "Work Sans", sans-serif;

  color: ${(props) => props.theme.primary_text};
`;

export const PracticeTestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Mock Tests Tabs

export const MockTestContainer = styled.section`
  display: grid;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Right Side Progress Container
export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;

  position: sticky;
  top: 90px;
  z-index: 100;

  @media screen and (max-width: 1024px) {
    position: static;
    width: 100%;
    order: 1;
  }
`;
