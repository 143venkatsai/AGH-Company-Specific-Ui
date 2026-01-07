import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: base-line;
  padding-top: 12px;

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

  overflow: hidden;

  @media screen and (max-width: 786px) {
    top: 57px;
  }
`;

export const TabItem = styled.span`
  position: relative;
  cursor: pointer;
  padding: 0 16px;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 500 : 400)};

  color: ${(props) => {
    if (props.active && props.theme.mode === "DARK") return "#FD546C";
    if (props.active) return "#FC2947";
    if (props.theme.mode === "DARK") return "#FFFFFF";
    return "#515151";
  }};

  transition: color 0.2s ease, font-weight 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;

    background-color: ${(props) =>
      props.active && props.theme.mode === "DARK" ? "#FD546C" : "#FC2947"};

    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.2s ease, background-color 0.2s ease;
  }
`;
