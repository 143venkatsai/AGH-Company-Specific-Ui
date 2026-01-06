import React from "react";

import Header from "../../components/Header/Header";
import { CompanyContainer } from "./CompanySpecific.styles";
import BackButton from "../../components/ui/BackButton";

import Header from "../../component/Header/Header";

const CompanySpecific = () => {
  return (
    <>
      <Header />
      <CompanyContainer>
        <BackButton />
      </CompanyContainer>
    </>
  );
};

export default CompanySpecific;
