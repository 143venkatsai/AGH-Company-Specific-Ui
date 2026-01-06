import styled from "styled-components";

export const TestContainer = styled.div`
  border: 1px solid ${(props) => props.theme.border_new};
  background-color: ${(props) => props.theme.background_new};
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 100% !important;
  box-sizing: border-box;
`;

export const TestTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${(props) => props.theme.card_border_new};
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
  color: ${(props) => props.theme.card_new_text};

  span {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
  }
`;

export const TestMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 24px;

  @media screen and (max-width: 786px) {
    padding: 0px 12px;
  }
`;

export const TestMiddleName = styled.h3`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.card_new_text};
`;

export const TopicsList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${(props) => props.theme.card_new_text};
    background-color: ${(props) => props.theme.card_label_bg};
    border-radius: 24px;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    padding: 4px 16px;
  }
`;

export const TestBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  > *:not(:last-child) {
    border-right: 1px solid #e9e9e9;
    padding-right: 24px;
  }

  @media screen (max-width: 786px) {
    > *:not(:last-child) {
      border-right: none;
      padding-right: 0;
    }
  }
`;

export const TestBottomLeft = styled.div`
  display: flex;
  align-items: baseline;

  p {
    color: ${(props) => props.theme.marks_text};
    font-size: 14px;
    font-weight: 500;
  }

  span {
    color: ${(props) => props.theme.score_text};
    font-size: 28px;
    font-weight: 600;
    margin-left: 4px;
  }

  h5 {
    color: ${(props) => props.theme.score_text};
    font-size: 16px;
    font-weight: 500;
  }
`;

export const TestBottomRight = styled.button`
  background-color: #e6f7f1;
  color: #009b68;
  padding: 6px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;

  flex: 1;
  white-space: nowrap;
`;

export const FullButton = styled.button`
  background-color: #fc2947;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: medium;
  letter-spacing: -2%;
  border-radius: 4px;
  padding: 8px 20px;
  width: 100%;
`;
