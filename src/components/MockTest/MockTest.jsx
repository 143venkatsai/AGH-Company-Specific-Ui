import React from "react";
import { useNavigate } from "react-router-dom";

import { LuClipboardList } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { RxLapTimer } from "react-icons/rx";

import {
  FullButton,
  TestBottom,
  TestBottomLeft,
  TestBottomRight,
  TestContainer,
  TestDetails,
  TestIcon,
  TestInfo,
  TestInfoLabel,
  TestMiddle,
  TestMiddleName,
  TestTitle,
  TestTop,
  TopicsList,
} from "./MockTest.styles";

const MockTest = ({ tabDetails }) => {
  const {
    title,
    questions,
    durationMinutes,
    sections,
    status,
    marks,
    action,
    path,
  } = tabDetails;
  const navigate = useNavigate();
  return (
    <>
      <TestContainer onClick={() => navigate(path)}>
        <TestTop>
          <TestIcon>
            <LuClipboardList size={32} strokeWidth={1.5} />
          </TestIcon>
          <TestDetails>
            <TestTitle>{title}</TestTitle>
            <TestInfo>
              <TestInfoLabel>
                <GoQuestion size={20} />
                <span>{questions} Qs</span>
              </TestInfoLabel>
              <TestInfoLabel>
                <RxLapTimer size={20} />
                <span>{durationMinutes} Mins</span>
              </TestInfoLabel>
            </TestInfo>
          </TestDetails>
        </TestTop>

        <TestMiddle>
          <TestMiddleName>Sections Included</TestMiddleName>
          <TopicsList>
            {sections.map((topic, index) => (
              <span key={index}>{topic}</span>
            ))}
          </TopicsList>
        </TestMiddle>

        {status === "Completed" ? (
          <TestBottom>
            <TestBottomLeft>
              <p>Marks :</p> <span>{marks.scored}</span>
              <h5>/{marks.total}</h5>
            </TestBottomLeft>
            <TestBottomRight status={status} onClick={() => navigate(path)}>
              {action}
            </TestBottomRight>
          </TestBottom>
        ) : (
          <FullButton>{action}</FullButton>
        )}
      </TestContainer>
    </>
  );
};

export default MockTest;
