import React from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuFileText } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { RxLapTimer } from "react-icons/rx";

import {
  MobileInfo,
  TestButton,
  TestContainer,
  TestDetails,
  TestIcon,
  TestInfo,
  TestInfoLabel,
  TestLeft,
  TestTitle,
} from "./PracticeTest.style";

const PracticeTest = ({ testDetails }) => {
  const { title, type, questionsCount, codingQuestions, durationMins, status } =
    testDetails;

  return (
    <>
      <TestContainer>
        <TestLeft>
          <TestIcon>
            {type === "aptitude" ? (
              <LuFileText size={32} />
            ) : (
              <LiaLaptopCodeSolid size={32} />
            )}
          </TestIcon>
          <TestDetails>
            <TestTitle>{title}</TestTitle>
            <TestInfo>
              <MobileInfo>
                {type === "technical" && (
                  <TestInfoLabel>
                    <FaCode size={20} />
                    <span>{codingQuestions} Coding Qs</span>
                  </TestInfoLabel>
                )}
              </MobileInfo>
              <TestInfoLabel>
                <GoQuestion size={20} />
                <span>{questionsCount} Qs</span>
              </TestInfoLabel>
              <TestInfoLabel>
                <RxLapTimer size={20} />
                <span>{durationMins} Mins</span>
              </TestInfoLabel>
            </TestInfo>
          </TestDetails>
        </TestLeft>
        <TestButton status={status}>{status}</TestButton>
      </TestContainer>
    </>
  );
};

export default PracticeTest;
