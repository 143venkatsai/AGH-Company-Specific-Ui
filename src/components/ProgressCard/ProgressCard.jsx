import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  Row,
  Label,
  Value,
  ProgressBar,
  ProgressFill,
} from "./ProgressCard.styles";

const ProgressCard = () => {
  return (
    <Card>
      <CardTitle>Progress</CardTitle>
      <CardSubtitle>Your Preparation Status</CardSubtitle>

      <Row>
        <Label>Practice Tests</Label>
        <Value>
          <span>4</span>/10
        </Value>
      </Row>
      <ProgressBar>
        <ProgressFill width="40%" />
      </ProgressBar>

      <Row style={{ marginTop: 20 }}>
        <Label>Mock Tests</Label>
        <Value>
          <span>0</span>/10
        </Value>
      </Row>
      <ProgressBar>
        <ProgressFill width="4%" />
      </ProgressBar>
    </Card>
  );
};

export default ProgressCard;
