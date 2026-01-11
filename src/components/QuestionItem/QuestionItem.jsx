import React, { useState } from "react";
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
  const [userSelectedOption, setUserSelectedOption] = useState(null);

  const getOptionState = (optionId) => {
    if (!userSelectedOption) return "default";

    if (optionId === correctOptionId) return "correct";

    if (
      optionId === userSelectedOption &&
      userSelectedOption !== correctOptionId
    ) {
      return "wrong";
    }

    return "default";
  };

  const handleOptionClick = (optionId) => {
    if (userSelectedOption) return;
    setUserSelectedOption(optionId);
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
              const isSelected = option.id === userSelectedOption;

              return (
                <Option
                  key={option.id}
                  optionState={optionState}
                  isSelected={isSelected}
                  onClick={() => handleOptionClick(option.id)}
                  style={{ cursor: `${userSelectedOption ? "" : "pointer"}` }}
                >
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
