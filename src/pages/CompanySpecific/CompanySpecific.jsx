import React, { useState } from "react";

import {
  CompanyContainer,
  MainContainer,
  MockTestContainer,
  PracticeSection,
  PracticeTabTitle,
  PracticeTestsContainer,
  RightSideContainer,
  TabsSection,
  TestMainContainer,
} from "./CompanySpecific.styles";
import BackButton from "../../components/ui/BackButton";
import Header from "../../components/Header/Header";
import CompanyHeroCard from "../../components/CompanyHeroCard/CompanyHeroCard";

import PracticeTest from "../../components/PracticeTest/PracticeTest";
import MockTest from "../../components/MockTest/MockTest";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import InterviewPatternCard from "../../components/InterviewPatternCard/InterviewPatternCard";

import { practiceTabData } from "../../mockData/practiceTabData";
import { mockTabData } from "../../mockData/mockTabData";
import Tabs from "../../components/ui/Tabs/Tabs";

const CompanySpecific = () => {
  const [activeTab, setActiveTab] = useState("practice");

  return (
    <>
      <Header />
      <CompanyContainer>
        {/* Back */}
        <BackButton />

        {/* Hero Card */}
        <CompanyHeroCard />

        <MainContainer>
          {/* Tabs */}
          <TabsSection>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "practice" && (
              <TestMainContainer>
                {practiceTabData.map((tabData, index) => (
                  <PracticeSection key={index}>
                    <PracticeTabTitle>{tabData.category}</PracticeTabTitle>
                    <PracticeTestsContainer>
                      {tabData.tests?.map((eachTest, index) => (
                        <PracticeTest key={index} testDetails={eachTest} />
                      ))}
                    </PracticeTestsContainer>
                  </PracticeSection>
                ))}
              </TestMainContainer>
            )}

            {activeTab === "mock" && (
              <MockTestContainer>
                {mockTabData.map((tabData, index) => (
                  <MockTest key={index} tabDetails={tabData} />
                ))}
              </MockTestContainer>
            )}
          </TabsSection>

          <RightSideContainer>
            <ProgressCard />
            <InterviewPatternCard />
          </RightSideContainer>
        </MainContainer>
      </CompanyContainer>
    </>
  );
};

export default CompanySpecific;
