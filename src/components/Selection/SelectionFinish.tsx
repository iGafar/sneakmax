import { FC } from "react";
import styled from "styled-components";

const SelectionFinish: FC = () => {
  return (
    <SelectionFinishStyle>
      <img src="./icons/selection-check.svg" alt="check" />
      <p>Отправлено</p>
    </SelectionFinishStyle>
  );
};

const SelectionFinishStyle = styled.div`
  background: rgb(255, 220, 179);
  min-height: 432px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 18px;
  }

  p {
    color: rgb(14, 90, 76);
    font-family: "Intro";
    font-size: 24px;
    line-height: 140%;
  }
`;

export default SelectionFinish;
