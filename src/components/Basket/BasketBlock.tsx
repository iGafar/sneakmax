import { FC } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";

interface IProps {
  setIsBasketOpen: () => void;
}

const BasketBlock: FC<IProps> = ({ setIsBasketOpen }) => {
  return (
    <BasketBlockStyle>
      <div className="container">
        <div className="back" onClick={() => setIsBasketOpen()}></div>
        <div className="basket">
          <ul className="list">
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
          </ul>
          <div className="info">
            <div>
              <h5>Итого:</h5>
              <p>25 789 ₽</p>
            </div>
            <button>Перейти в корзину</button>
          </div>
        </div>
      </div>
    </BasketBlockStyle>
  );
};

const BasketBlockStyle = styled.div`
  .back {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 75, 88, 0.7);
    z-index: 4;
  }

  .container {
    position: fixed;
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }

  .basket {
    position: absolute;
    z-index: 5;
    right: 20px;
    top: 0;
    box-shadow: 0px -4px 10px 0px rgba(0, 13, 84, 0.1);
    background: rgb(255, 255, 255);
    max-width: 480px;
    padding-top: 10px;
  }

  .list {
    padding: 0 20px;
    min-height: 200px;
    max-height: 414px;
    overflow: auto;
  }

  .info {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 13px;
    box-shadow: 0px -4px 10px 0px rgba(0, 13, 84, 0.1);
    background: rgb(255, 255, 255);

    h5 {
      color: rgb(77, 77, 77);
      font-size: 14px;
      line-height: 20px;
    }

    p {
      color: rgb(77, 77, 77);
      font-family: "Intro";
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
    }

    button {
      color: rgb(255, 255, 255);
      font-family: "Intro";
      font-size: 16px;
      line-height: 16px;
      border-radius: 4px;
      background: var(--accent);
      padding: 22px 47px;
    }
  }
`;

export default BasketBlock;
