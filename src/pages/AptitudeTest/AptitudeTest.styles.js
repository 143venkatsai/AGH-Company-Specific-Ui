import styled from "styled-components";

export const ResultPageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
    gap: 32px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
    gap: 32px;
  }
`;

export const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
