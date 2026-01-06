import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  Item,
  ItemText,
  ItemTitle,
  ItemDesc,
  Percentage,
  Divider,
} from "./InterviewPatternCard.styles";

const InterviewPatternCard = () => {
  return (
    <Card>
      <CardTitle>Microsoft Interview Pattern</CardTitle>
      <CardSubtitle>Pattern clarity for smarter prep</CardSubtitle>

      <Item>
        <ItemText>
          <ItemTitle>Aptitude</ItemTitle>
          <ItemDesc>Quant, Logical and Verbal</ItemDesc>
        </ItemText>
        <Percentage>25%</Percentage>
      </Item>

      <Divider />

      <Item>
        <ItemText>
          <ItemTitle>Technical MCQs</ItemTitle>
          <ItemDesc>C Programming</ItemDesc>
        </ItemText>
        <Percentage>25%</Percentage>
      </Item>

      <Divider />

      <Item>
        <ItemText>
          <ItemTitle>Coding Questions</ItemTitle>
          <ItemDesc>Medium - Hard Questions</ItemDesc>
        </ItemText>
        <Percentage>50%</Percentage>
      </Item>
    </Card>
  );
};

export default InterviewPatternCard;
