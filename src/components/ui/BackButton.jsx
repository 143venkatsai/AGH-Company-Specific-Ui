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
          color: `${(props) => props.theme.text.new_text}`,
          fontWeight: "400",
          margin: "0",
        }}
      >
        <ChevronLeft size={18} /> Back
      </div>
    </>
  );
};

export default BackButton;
