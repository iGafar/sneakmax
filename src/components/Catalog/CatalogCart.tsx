import { FC } from "react";
import styled from "styled-components";

const CatalogCart: FC = () => {
  return (
    <CatalogCartStyle>
      <picture>
        <img src="./images/sneakers.jpeg" alt="sneakers" />
      </picture>
      <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
      <p>11 000 р₽</p>
    </CatalogCartStyle>
  );
};

const CatalogCartStyle = styled.li`
  picture {
    max-width: 280px;
    height: 293px;
    display: inline-block;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-bottom: 6px;
    color: rgb(68, 75, 88);
    font-size: 16px;
    line-height: 19px;
  }

  p {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 20px;
    line-height: 20px;
  }
`;

export default CatalogCart;
