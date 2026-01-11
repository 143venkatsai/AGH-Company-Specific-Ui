import React from "react";
import Header from "../../components/Header/Header";

import { QuestionsList, ResultPageContainer } from "./TechnicalTest.styles";

import technicalData from "../../mockData/technicalData.json";

import ResultTop from "../../components/ResultTop/ResultTop";
import QuestionItem from "../../components/QuestionItem/QuestionItem";
import CodingQuestion from "../../components/CodingQuestion/CodingQuestion";

const TechnicalTest = () => {
  return (
    <>
      <Header />
      <ResultPageContainer>
        <ResultTop
          category={technicalData.category}
          testName={technicalData.quizTitle}
          questions={technicalData.totalQuestions}
          duration={technicalData.duration}
          correct={technicalData.correct}
          wrong={technicalData.wrong}
          codingQuestions={technicalData.codingQuestions}
        />

        <QuestionsList>
          {technicalData.coding.map((coding, index) => (
            <CodingQuestion key={index} questionDetails={coding} />
          ))}
        </QuestionsList>

        <QuestionsList>
          {technicalData.questions.map((question, index) => (
            <QuestionItem key={index} questionInfo={question} />
          ))}
        </QuestionsList>
      </ResultPageContainer>
    </>
  );
};

export default TechnicalTest;
