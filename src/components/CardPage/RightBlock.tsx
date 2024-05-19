import { FC } from "react";
import styled from "styled-components";
import CardPageForm from "./CardPageForm";
import { ISneakers } from "../../store/types";
import star from "../../assets/star.svg";

interface IProps {
  itemData: ISneakers;
}

const RightBlock: FC<IProps> = ({ itemData }) => {
  return (
    <RightBlockStyle>
      <Info>
        <p>Артикул: {itemData.vendorСode}</p>
        <p>В наличии: {itemData.inStock}</p>
      </Info>
      <h2>{itemData.title}</h2>
      <Stars>
        {[...Array(itemData.stars)].map((_, index) => (
          <img key={index} src={star} alt="star" />
        ))}
      </Stars>

      <CardPageForm itemData={itemData} />

      <p>Бесплатная доставка до двери</p>
      <p>Оплата заказа при получении</p>
      <p>Обмен в течении двух недель</p>

      <h3>Характеристики</h3>

      <Сharacteristics>
        <p>Пол: {itemData.gender}</p>
        <p>Цвета: {itemData.color}</p>
        <p>Состав: {itemData.compound}</p>
        <p>Страна: {itemData.country}</p>
      </Сharacteristics>
    </RightBlockStyle>
  );
};

const RightBlockStyle = styled.div`
  min-width: 430px;

  h2 {
    color: rgb(68, 75, 88);
    font-size: 24px;
    margin-bottom: 20px;
  }

  & > p {
    color: rgb(178, 181, 187);
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 7px;

    &::before {
      content: url("./icons/check-gray.svg");
      margin-right: 10px;
    }

    &:last-of-type {
      margin-bottom: 50px;
    }
  }

  h3 {
    color: rgb(68, 75, 88);
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;

const Сharacteristics = styled.div`
  color: rgb(68, 75, 88);
  font-size: 16px;

  p:not(:last-child) {
    margin-bottom: 9px;
  }
`;

export default RightBlock;
