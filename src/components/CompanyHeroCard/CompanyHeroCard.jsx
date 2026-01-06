import React from "react";
import { CompanyHeroCardWrapper, CompanyLogo } from "./CompanyHeroCard.styles";

const CompanyHeroCard = () => {
  return (
    <>
      <CompanyHeroCardWrapper>
        <CompanyLogo src="https://via.placeholder.com/150" alt="Company Logo" />
      </CompanyHeroCardWrapper>
    </>
  );
};

export default CompanyHeroCard;
