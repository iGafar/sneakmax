import { FC } from "react";
import styled from "styled-components";
import Btn from "../../ui/Btn";

interface IProps {
  setPage: (page: number) => void;
}

const SelectionForm: FC<IProps> = ({ setPage }) => {
  return (
    <SelectionFormStyle>
      <h3>Получить предложение</h3>
      <p>Получите подборку подходящих для вас моделей на почту</p>
      <input required type="text" placeholder="Ваше имя" />
      <input required type="text" placeholder="E-mail" />
      <Btn fnc={() => setPage(5)}>Получить</Btn>
    </SelectionFormStyle>
  );
};

const SelectionFormStyle = styled.form`
  min-height: 432px;
  border-radius: 4px;
  background-color: var(--small-text);
  padding: 40px;

  h3 {
    color: rgb(255, 255, 255);
    font-family: "Intro";
    font-size: 36px;
    font-weight: 700;
    line-height: 140%;
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 24px;
  }

  input {
    padding: 20px;
    color: var(--gray);
    font-size: 16px;
    line-height: 140%;
    display: block;
    margin-bottom: 10px;
    border-radius: 4px;
    width: min(500px, 100%);

    &:last-of-type {
      margin-bottom: 20px;
    }
  }
`;

export default SelectionForm;
