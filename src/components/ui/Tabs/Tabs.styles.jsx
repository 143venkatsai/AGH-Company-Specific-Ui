import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: base-line;
  padding-top: 12px;
  gap: 24px;

  margin-bottom: 16px;
  width: 100%;

  border: ${(props) =>
    props.theme.mode === "DARK"
      ? `1px solid ${props.theme.border_new}`
      : "none"};

  border-radius: ${(props) => (props.theme.mode === "DARK" ? "12px" : "0")};
  border-bottom: 1px solid ${(props) => props.theme.card_border_new};

  position: sticky;
  top: 73px;
  z-index: 100;

  background-color: ${(props) => props.theme.background_new};
  height: 48px;
  box-sizing: border-box;

  overflow: hidden; /* prevents active underline from cutting corners */

  @media screen and (max-width: 786px) {
    top: 57px;
  }
`;

export const TabItem = styled.span`
  position: relative;
  cursor: pointer;
  padding: 0 10px 10px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter", sans-serif;

  color: ${(props) =>
    props.active
      ? "#FC2947"
      : props.theme.mode === "DARK"
      ? "#FFFFFF"
      : "#515151"};

  transition: color 0.2s ease;

  /* Active indicator */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;

    height: 2px;
    background-color: #fc2947;

    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;
