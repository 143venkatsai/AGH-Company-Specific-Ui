import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { BiBullseye } from "react-icons/bi";
import { HiOutlineClock } from "react-icons/hi2";

import {
  CompanyHeroCardWrapper,
  CompanyInfo,
  CompanyInfoBottom,
  CompanyInfoTop,
  CompanyLogo,
  CompanyName,
  CompanyTagline,
  InfoItem,
  InfoLabel,
  InfoLabelItems,
  InfoLogoContainer,
  InfoTextContainer,
} from "./CompanyHeroCard.styles";

import companyImage from "../../assets/companyImage.png";

const companyInfoDetails = [
  {
    id: 1,
    icon: <IoPeopleOutline size={32} />,
    iconBg: "#E6F7F1",
    iconColor: "#007951",
    iconBgDark: "#00AA7280",
    infoTitle: "Roles Covered",
    infoItems: ["SDE", "Intern", "support"],
  },
  {
    id: 2,
    icon: <BiBullseye size={32} />,
    iconBg: "#FFF6EA",
    iconColor: "#FDA829",
    iconBgDark: "#FDA82980",
    infoTitle: "Interview Focus",
    infoItems: ["Aptitude", "Technical"],
  },
  {
    id: 3,
    icon: <HiOutlineClock size={32} />,
    iconBg: "#E9F3F9",
    iconColor: "#1A5D88",
    iconBgDark: "#2583C080",
    infoTitle: "Estimated Prep Time",
    infoItems: ["40 - 50 Hours"],
  },
];

const CompanyHeroCard = () => {
  return (
    <>
      <CompanyHeroCardWrapper>
        <CompanyLogo src={companyImage} alt="Company Logo" />
        <CompanyInfo>
          <CompanyInfoTop>
            <CompanyName>Prepare for Microsoft Interviews</CompanyName>
            <CompanyTagline>Last Updated - 1 month Ago</CompanyTagline>
          </CompanyInfoTop>
          <CompanyInfoBottom>
            {companyInfoDetails.map((item, index) => (
              <InfoItem key={index}>
                <InfoLogoContainer
                  bg={item.iconBg}
                  darkBg={item.iconBgDark}
                  lightColor={item.iconColor}
                >
                  {item.icon}
                </InfoLogoContainer>
                <InfoTextContainer>
                  <InfoLabel>{item.infoTitle}</InfoLabel>
                  <InfoLabelItems>
                    {item.infoItems.map((eachLabel, idx) => (
                      <span key={idx}>{eachLabel}</span>
                    ))}
                  </InfoLabelItems>
                </InfoTextContainer>
              </InfoItem>
            ))}
          </CompanyInfoBottom>
        </CompanyInfo>
      </CompanyHeroCardWrapper>
    </>
  );
};

export default CompanyHeroCard;
