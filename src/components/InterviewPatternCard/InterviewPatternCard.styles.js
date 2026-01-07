import styled from "styled-components";

export const Card = styled.div`
  background: ${(props) => props.theme.background_new};
  border: 1px solid ${(props) => props.theme.border_new};
  border-radius: 16px;
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  font-style: semi-bold;
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

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
  margin-top: 20px;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.card_new_text_4};
`;

export const ItemDesc = styled.span`
  font-size: 14px;
  color: #9b9b9b;
`;

export const Percentage = styled.span`
  background: ${(props) => props.theme.percentage_bg};
  color: ${(props) => props.theme.percentage_text};
  font-size: 16px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 32px;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${(props) => props.theme.card_border_new};
  margin: 16px 0;
`;
