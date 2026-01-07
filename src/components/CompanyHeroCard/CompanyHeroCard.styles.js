import styled from "styled-components";

export const CompanyHeroCardWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.border_new};
  background-color: ${(props) => props.theme.background_new};
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 20px;

  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;

export const CompanyLogo = styled.img`
  width: 211px;
  height: 137px;
  border-radius: 8px;

  @media screen and (max-width: 786px) {
    width: 100%;
    height: 209px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CompanyInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text.primary};
  margin: 0;
  font-family: "Work Sans", sans-serif;

  @media screen and (max-width: 786px) {
    font-size: 20px;
  }
`;

export const CompanyTagline = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Inter", sans-serif;

  color: ${(props) => props.theme.card_new_text};
  margin: 0;
`;

export const CompanyInfoBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;

  gap: 12px;
`;

export const InfoLogoContainer = styled.div`
  background-color: ${(props) =>
    props.theme.mode === "LIGHT" ? props.bg : props.darkBg};
  color: ${(props) =>
    props.theme.mode === "LIGHT" ? props.lightColor : props.bg};
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoLabel = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.card_label_text};
`;

export const InfoLabelItems = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;

  span {
    font-size: 16px;
    color: ${(props) => props.theme.card_label_text_2};
    position: relative;
    padding-left: 12px;
  }

  span:first-child {
    padding-left: 0;
  }

  span:first-child::before {
    content: none;
  }

  span:not(:first-child)::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${(props) => props.theme.card_label_text_2};
    font-size: 18px;
    line-height: 1;
  }
`;
