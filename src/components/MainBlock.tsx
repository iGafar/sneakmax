import { FC } from "react";
import styled from "styled-components";

const MainBlock: FC = () => {
  return (
    <MainBlockStyle>
      <div className="container">
        <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
        <p>
          Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
          многие другие по низким ценам
        </p>
        <a href="#">Перейти к покупкам</a>
      </div>
    </MainBlockStyle>
  );
};

const MainBlockStyle = styled.section`
  background-color: var(--bg);
  padding: 100px 0;
  color: var(--white);
  position: relative;

  &:before {
    content: "SneakMax";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Intro", sans-serif;
    color: rgba(255, 255, 255, 0.12);
    font-size: 200px;
    font-weight: 700;
    line-height: 200px;
  }

  h1 {
    font-family: "Intro", sans-serif;
    font-size: 36px;
    max-width: 510px;
    line-height: 140%;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    max-width: 480px;
    line-height: 140%;
    margin-bottom: 40px;
  }

  a {
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    border-radius: 4px;
    background: var(--accent);
    padding: 22px 47px;
  }

  @media (min-width: 768px) {
    a {
      &:hover {
        background-color: rgba(204, 73, 73, 1);
      }
      &:active {
        background-color: rgba(140, 40, 40, 1);
      }
    }
  }
`;

export default MainBlock;
