import styled from "styled-components";

export const TestContainer = styled.div`
  border: 1px solid ${(props) => props.theme.border_new};
  border-radius: 8px;
  background-color: ${(props) => props.theme.background_new};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TestLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TestIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.icon_bg};
  color: ${(props) => props.theme.icon_color};
  border-radius: 100%;
`;

export const TestDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TestTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  font-style: medium;
  color: ${(props) => props.theme.primary_text};
`;

export const TestInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TestInfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${(props) => props.theme.card_new_text};
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
  }
`;

export const TestButton = styled.button`
  background-color: ${(props) =>
    props.status === "completed" ? "#e6f7f1" : "#FC2947"};
  color: ${(props) => (props.status === "completed" ? "#009b68" : "#FFFFFF")};
  padding: ${(props) =>
    props.status === "completed" ? "6px 20px" : "8px 20px"};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-style: medium;
  width: 120px;
  text-align: center;

  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;

// background-color: ${(props) =>
//   props.status === "completed"
//     ? props.theme.mode === "dark"
//       ? "#00795180"
//       : "#e6f7f1"
//     : "#FC2947"};

// color: ${(props) =>
//   props.status === "completed"
//     ? props.theme.mode === "dark"
//       ? "#E6F7F1"
//       : "#009b68"
//     : "#FFFFFF"};
