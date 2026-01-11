import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${(props) => props.theme.border_new};
  background-color: ${(props) => props.theme.background_new};
  padding: 18px 20px 20px 16px;
  border-radius: 8px;
`;

export const QuestionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionNumber = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  color: ${(props) => props.theme.result_que_text};
`;

export const DifficultyBadge = styled.button`
  border-radius: 16px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  cursor: default;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;

  background-color: ${({ difficulty, theme }) =>
    theme.difficulty[difficulty.toLowerCase()].bg};

  color: ${({ difficulty, theme }) =>
    theme.difficulty[difficulty.toLowerCase()].text};
`;

export const QuestionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 8px;
`;

export const QuestionName = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  color: ${(props) => props.theme.result_que_title};
`;

export const OptionsGrid = styled.div`
  display: grid;
  gap: 15px;
  width: 100%;
  box-sizing: border-box;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Option = styled.button`
  background-color: ${({ optionState, theme }) => theme.option[optionState].bg};
  border: 1px solid
    ${({ optionState, theme }) => theme.option[optionState].border};
  color: ${({ isSelected, theme }) =>
    isSelected ? "#343434" : theme.result_que_title};
  height: 38px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  padding: 0px 20px;
  font-family: Poppins;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
`;

export const Explanation = styled.div`
  display: flex;
  aign-items: center;
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;

  span {
    font-weight: 500;
    font-style: Medium;
    margin-left: 4px;
  }
`;
