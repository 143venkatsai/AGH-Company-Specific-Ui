import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  border-radius: 8px;
  padding: 0px 24px;
  background-color: ${({ status, theme }) => theme.codingQuestion[status].bg};

  border-left: 12px solid
    ${({ status, theme }) => theme.codingQuestion[status].border};
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`;

export const QuestionNumber = styled.h1`
  font-family: Work Sans;
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  color: ${(props) => props.theme.primary_text};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.div`
  font-family: Work Sans;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 18px;
  color: ${({ theme }) => theme.primary_text};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Submission = styled.div`
  font-family: Work Sans;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.question_label};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  span {
    font-family: Work Sans;
    font-weight: 600;
    font-style: semi-bold;
    font-size: 18px;

    color: ${({ status, theme }) => theme.submissionStatus[status]};

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const SolveButton = styled.button`
  height: 40px;
  padding: 0px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: Poppins;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  background-color: #ff2f4f;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
  }
`;
