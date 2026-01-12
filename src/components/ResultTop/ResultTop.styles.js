import styled from "styled-components";

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const TestLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TestTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TestTitle = styled.h1`
  margin: 0;
  font-family: "Work Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  font-style: semi-bold;
  color: ${(props) => props.theme.primary_text};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TestStatus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-style: medium;
  height: 24px;
  border-radius: 4px;
  padding: 0px 12px;
  background-color: ${(props) => props.theme.result_btn_bg};
  color: ${(props) => props.theme.result_btn_text};
`;

export const TestDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TestInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.card_new_text};

  span {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
  }
`;

export const TestRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TestRightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-family: "Work Sans", sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: medium;
    color: ${(props) => props.theme.card_new_text};
  }
`;

export const TestCorrectStatus = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00aa72;
  color: ${(props) => props.theme.primary_text};
`;

export const TestWrongStatus = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.result_wrong_bg};
  color: ${(props) => props.theme.primary_text};
`;

// Mock Test Score

export const MockTestResult = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ResultLabel = styled.span`
  font-family: Work Sans;
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;

  color: ${({ result, theme }) =>
    result === "pass" ? theme.mockTestResult.pass : theme.mockTestResult.fail};
`;

export const ScoredMarks = styled.span`
  font-family: Work Sans;
  font-weight: 500;
  font-style: Medium;
  font-size: 40px;
  margin-left: 6px;
  color: ${({ result, theme }) =>
    result === "pass" ? theme.mockTestResult.pass : theme.mockTestResult.fail};
`;

export const TotalMarks = styled.span`
  font-family: Work Sans;
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;

  color: ${({ theme }) => theme.mockTestResult.total};
`;
