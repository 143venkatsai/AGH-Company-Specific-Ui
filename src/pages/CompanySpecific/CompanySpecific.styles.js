import styled from "styled-components";

export const CompanyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px;

  /* Large desktops */
  max-width: 1400px;

  /* Laptops */
  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  /* Tablets */
  @media (max-width: 1024px) {
    max-width: 960px;
    padding: 16px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 12px;
  }
`;
