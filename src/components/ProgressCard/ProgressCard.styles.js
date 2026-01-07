import styled from "styled-components";

export const Card = styled.div`
  background: ${(props) => props.theme.background_new};
  border: 1px solid ${(props) => props.theme.border_new};
  border-radius: 16px;
  padding: 20px;
  gap: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  color: ${(props) => props.theme.primary_text};
  margin-bottom: 4px;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.card_new_text};
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-style: medium;
  color: ${(props) => props.theme.card_new_text_3};
`;

export const Value = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #2583c0;

  span {
    font-size: 24px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e6f7f1;
  border-radius: 6px;
  margin-top: 8px;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  background: #2583c0;
  border-radius: 6px;
`;
