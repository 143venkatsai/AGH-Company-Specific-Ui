import React from "react";
import {
  Card,
  Left,
  Title,
  Submission,
  SolveButton,
  QuestionNumber,
  QuestionInfo,
} from "./CodingQuestion.styles";

const CodingQuestion = ({ questionDetails }) => {
  const { id, questionTitle, status, submission } = questionDetails;

  const normalizedStatus = status.toLowerCase(); // "failed" | "success"

  return (
    <Card status={normalizedStatus}>
      <Left>
        <QuestionNumber>{id}.</QuestionNumber>
        <QuestionInfo>
          <Title>{questionTitle}</Title>
          <Submission status={normalizedStatus}>
            Submission : <span>{submission ? "Success" : "Failed"}</span>
          </Submission>
        </QuestionInfo>
      </Left>

      <SolveButton>Solve</SolveButton>
    </Card>
  );
};

export default CodingQuestion;
