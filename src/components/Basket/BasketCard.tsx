import { FC } from "react";
import styled from "styled-components";

const BasketCard: FC = () => {
  return (
    <BasketCardStyle>
      <picture>
        <img src="./images/sneakers.jpeg" alt="кроcсовки" />
      </picture>
      <div>
        <h3 className="title">Женские кроссовки Puma Force 1 Shadow</h3>
        <p className="price">8 678 ₽</p>
      </div>
      <button>
        <img src="./icons/trash.svg" alt="trash" />
      </button>
    </BasketCardStyle>
  );
};

const BasketCardStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 25px;

  picture {
    width: 100px;
    height: 100px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .title {
    color: rgb(77, 77, 77);
    font-size: 14px;
    line-height: 20px;
  }

  .price {
    color: rgb(77, 77, 77);
    font-family: "Intro";
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }

  button {
    width: 50px;
    height: 50px;

    &:hover {
      border-radius: 4px;
      background: var(--sec-bg);
    }
  }
`;

export default BasketCard;
