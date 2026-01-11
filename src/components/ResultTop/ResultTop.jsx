import React from "react";
import { useTheme } from "styled-components";

import { Check, X } from "lucide-react";
import { FaCode } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { RxLapTimer } from "react-icons/rx";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { GoXCircleFill } from "react-icons/go";

import {
  TestCorrectStatus,
  TestDetails,
  TestInfo,
  TestLeft,
  TestRight,
  TestRightInfo,
  TestStatus,
  TestTitle,
  TestTop,
  TestWrongStatus,
  TopSection,
} from "./ResultTop.styles";

const ResultTop = ({
  category,
  testName,
  codingQuestions,
  questions,
  duration,
  correct,
  wrong,
}) => {
  const theme = useTheme();

  return (
    <>
      <TopSection>
        <TestLeft>
          <TestTop>
            <TestTitle>{testName}</TestTitle>
            <TestStatus>Completed</TestStatus>
          </TestTop>

          <TestDetails>
            {category === "Technical" && (
              <TestInfo>
                <FaCode size={20} />
                <span>{codingQuestions} Coding Qs</span>
              </TestInfo>
            )}
            <TestInfo>
              <GoQuestion size={20} />
              <span>{questions} Qs</span>
            </TestInfo>
            <TestInfo>
              <RxLapTimer size={20} />
              <span>{duration} Mins</span>
            </TestInfo>
          </TestDetails>
        </TestLeft>

        <TestRight>
          <TestRightInfo>
            <RiCheckboxCircleFill size={44} style={{ color: "#00AA72" }} />
            <span>{correct}</span>
          </TestRightInfo>
          <TestRightInfo>
            <GoXCircleFill size={40} style={{ color: theme.result_wrong_bg }} />
            <span>{wrong}</span>
          </TestRightInfo>
        </TestRight>
      </TopSection>
    </>
  );
};

export default ResultTop;
