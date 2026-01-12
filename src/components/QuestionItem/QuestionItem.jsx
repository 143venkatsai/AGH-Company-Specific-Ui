import React from "react";
import {
  DifficultyBadge,
  Explanation,
  Option,
  OptionsGrid,
  QuestionContainer,
  QuestionInfoContainer,
  QuestionName,
  QuestionNumber,
  QuestionTop,
} from "./QuestionItem.styles";

const QuestionItem = ({ questionInfo }) => {
  const {
    id,
    difficulty,
    question,
    options,
    correctOptionId,
    selectedOptionId,
    explanation,
  } = questionInfo;

  const getOptionState = (optionId) => {
    if (!selectedOptionId) return "default";

    if (optionId === correctOptionId) return "correct";

    if (optionId === selectedOptionId && selectedOptionId !== correctOptionId) {
      return "wrong";
    }

    return "default";
  };

  return (
    <>
      <QuestionContainer>
        <QuestionTop>
          <QuestionNumber>Questions {id}</QuestionNumber>
          <DifficultyBadge difficulty={difficulty}>
            {difficulty}
          </DifficultyBadge>
        </QuestionTop>
        <QuestionInfoContainer>
          <QuestionName>{question}</QuestionName>
          <OptionsGrid>
            {options.map((option) => {
              const optionState = getOptionState(option.id);

              return (
                <Option key={option.id} optionState={optionState}>
                  {option.id}. {option.value}
                </Option>
              );
            })}
          </OptionsGrid>

          <Explanation>
            Explanation :<span> {explanation}</span>
          </Explanation>
        </QuestionInfoContainer>
      </QuestionContainer>
    </>
  );
};

export default QuestionItem;
