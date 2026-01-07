import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  gap: 24px;

  margin-bottom: 16px;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.card_border_new};

  position: sticky;
  top: 73px;
  z-index: 100;

  background-color: ${(props) => props.theme.background_new};
  padding-top: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 786px) {
    top: 57px;
  }
`;

export const TabItem = styled.span`
  cursor: pointer;
  padding: 0 10px 10px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;

  color: ${(props) =>
    props.active
      ? "#FC2947"
      : props.theme.mode === "DARK"
      ? "#FFFFFF"
      : "#515151"};

  border-bottom: ${(props) => (props.active ? "2px solid #FC2947" : "none")};

  transition: color 0.2s ease, border-bottom 0.2s ease;
`;
