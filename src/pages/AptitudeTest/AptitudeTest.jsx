import React from "react";
import Header from "../../components/Header/Header";

import { QuestionsList, ResultPageContainer } from "./AptitudeTest.styles";

import aptitudeData from "../../mockData/aptitudeData.json";

import ResultTop from "../../components/ResultTop/ResultTop";
import QuestionItem from "../../components/QuestionItem/QuestionItem";

const AptitudeTest = () => {
  return (
    <>
      <Header />
      <ResultPageContainer>
        <ResultTop
          category={aptitudeData.category}
          testName={aptitudeData.quizTitle}
          questions={aptitudeData.totalQuestions}
          duration={aptitudeData.duration}
          correct={aptitudeData.correct}
          wrong={aptitudeData.wrong}
        />

        <QuestionsList>
          {aptitudeData.questions.map((question, index) => (
            <QuestionItem key={index} questionInfo={question} />
          ))}
        </QuestionsList>
      </ResultPageContainer>
    </>
  );
};

export default AptitudeTest;
