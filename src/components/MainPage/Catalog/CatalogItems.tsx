import { FC } from "react";
import styled from "styled-components";
import CatalogCart from "./CatalogCard";

const CatalogItems: FC = () => {
  return (
    <CatalogItemsStyle>
      <ul>
        <CatalogCart />
        <CatalogCart />
        <CatalogCart />
        <CatalogCart />
        <CatalogCart />
        <CatalogCart />
      </ul>
      <button className="more">Показать еще</button>
    </CatalogItemsStyle>
  );
};

const CatalogItemsStyle = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
  }

  .more {
    color: rgb(255, 255, 255);
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    border-radius: 4px;
    background-color: var(--accent);
    padding: 22px 47px;
    margin: 0 auto;

    &:hover {
      background: var(--accent-hover);
    }

    &:active {
      background: var(--accent-active);
    }
  }
`;

export default CatalogItems;
