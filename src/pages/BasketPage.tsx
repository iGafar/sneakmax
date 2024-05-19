import { FC } from "react";
import styled from "styled-components";
import {
  BasketPageBlock,
  BasketPageForm,
  PageBack,
  PageSection,
  PageWrapper,
} from "../components";

const BasketPage: FC = () => {
  return (
    <PageSection>
      <PageBack />
      <PageWrapper maxw="580">
        <TitleBlock>
          <h2>Оформление заказа </h2>
          <p>Заказ 3456 67</p>
        </TitleBlock>
        <BasketPageBlock />
        <BasketPageForm />
      </PageWrapper>
    </PageSection>
  );
};

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h2 {
    color: rgb(68, 75, 88);
    font-family: "Intro Bold";
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }

  p {
    color: rgb(178, 181, 187);
    font-size: 14px;
    line-height: 17px;
  }
`;

export default BasketPage;
