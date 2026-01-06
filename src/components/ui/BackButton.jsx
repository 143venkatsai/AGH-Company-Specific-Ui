import React from "react";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "18px",
          marginBottom: "16px",
          cursor: "pointer",
          color: "#000000",
          fontWeight: "400",
        }}
      >
        <ChevronLeft size={18} /> Back
      </div>
    </>
  );
};

export default BackButton;
