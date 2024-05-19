import { FC } from "react";
import styled from "styled-components";
import Btn from "../ui/Btn";

const BasketPageForm: FC = () => {
  return (
    <BasketPageFormStyle>
      <input type="text" placeholder="Ваше имя" />
      <input type="tel" placeholder="Номер телефона" />
      <input type="text" placeholder="E-mail" />

      <Btn>Оформить заказ</Btn>
    </BasketPageFormStyle>
  );
};

const BasketPageFormStyle = styled.form`
  input {
    padding: 20px;
    border-radius: 4px;
    background: rgb(247, 247, 247);
    width: 100%;
    color: rgb(178, 181, 187);
    font-size: 16px;
    line-height: 140%;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:last-of-type {
      margin-bottom: 29px;
    }
  }
`;

export default BasketPageForm;
