import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-op: 16px;
  border-bottom: 1px solid ${(props) => props.theme.card_border_new};
  width: full;
  position: sticky;
  top: 73px;
  z-index: 1000;
  background-color: ${(props) => props.theme.background_new};
  padding-top: 12px;
  border-radius: 8px;
  z-index: 100;
  padding-left: 10px;

  @media screen and (max-width: 786px) {
    top: 57px;
    padding-left: 0px;
  }
`;

export const TabItem = styled.span`
  cursor: pointer;
  padding: 0 10px 10px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;

  color: ${(props) => {
    if (props.active && props) return "#FC2947";
    if (props.theme === "DARK") return "#FFFFFF";
    return "#515151";
  }};

  border-bottom: ${(props) => (props.active ? "2px solid #FC2947" : "none")};

  transition: color 0.2s ease, border-bottom 0.2s ease;
`;
