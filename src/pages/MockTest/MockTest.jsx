import React from "react";
import Header from "../../components/Header/Header";
import { QuestionsList, ResultPageContainer } from "./MockTest.styles";
import ResultTop from "../../components/ResultTop/ResultTop";

import mockTestData from "../../mockData/mockTestData.json";
import CodingQuestion from "../../components/CodingQuestion/CodingQuestion";
import QuestionItem from "../../components/QuestionItem/QuestionItem";

const MockTest = () => {
  return (
    <>
      <Header />
      <ResultPageContainer>
        <ResultTop
          category={mockTestData.category}
          testName={mockTestData.quizTitle}
          questions={mockTestData.totalQuestions}
          duration={mockTestData.duration}
          correct={mockTestData.correct}
          wrong={mockTestData.wrong}
          marks={mockTestData.marks}
        />
        <QuestionsList>
          {mockTestData.coding.map((coding, index) => (
            <CodingQuestion key={index} questionDetails={coding} />
          ))}
        </QuestionsList>

        <QuestionsList>
          {mockTestData.questions.map((question, index) => (
            <QuestionItem key={index} questionInfo={question} />
          ))}
        </QuestionsList>
      </ResultPageContainer>
    </>
  );
};

export default MockTest;
