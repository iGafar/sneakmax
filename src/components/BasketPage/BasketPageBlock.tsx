import React, { FC } from "react";
import styled from "styled-components";
import BasketList from "../Basket/BasketList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ISneakers } from "../../store/types";

const BasketPageBlock: FC = () => {
  const [isBasketOpen, setIsBasketOpen] = React.useState<boolean>(false);
  const basket = useSelector<RootState, ISneakers[]>(
    (state) => state.basket.data
  );

  const sum = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <BasketPageBlockStyle>
      <TextInfo>
        <span>Товаров в заказе:</span> {basket.length}шт
      </TextInfo>
      <TextInfo>
        <span>Общая сумма заказа:</span> {sum}р
      </TextInfo>
      <Btn
        onClick={() => setIsBasketOpen((prev) => !prev)}
        $isOpen={isBasketOpen}
      >
        Состав заказа <img src="./icons/down.svg" alt="down" />
      </Btn>
      <BasketList page isBasketOpen={isBasketOpen} />
    </BasketPageBlockStyle>
  );
};

const BasketPageBlockStyle = styled.div`
  padding: 30px;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 4px;
  background: rgb(255, 255, 255);
  margin-bottom: 40px;
`;

const TextInfo = styled.p`
  color: rgb(178, 181, 187);
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px;

  span {
    color: rgb(68, 75, 88);
    font-family: "Intro Bold";
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  }
`;

const Btn = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgb(68, 75, 88);
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;

  img {
    transition: all 200ms linear;
    ${(props) => props.$isOpen && "transform: scale(1, -1);"}
  }
`;

export default BasketPageBlock;
