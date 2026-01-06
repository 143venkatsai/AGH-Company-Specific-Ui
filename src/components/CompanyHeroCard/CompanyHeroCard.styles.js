import styled from "styled-components";

export const CompanyHeroCardWrapper = styled.div`
  border: 1px solid #e4e4e7;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
`;

export const CompanyLogo = styled.img`
  width: auto;
  height: 137px;
  border-radius: 8px;
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
  color: #262626;
  margin: 0;
`;

export const CompanyTagline = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #6e6e6e;
  margin: 0;
`;
