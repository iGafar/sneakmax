import { FC } from "react";
import styled from "styled-components";
import CatalogCart from "./CatalogCart";

const CatalogItems: FC = () => {
  return (
    <CatalogItemsStyle>
      <CatalogCart />
      <CatalogCart />
      <CatalogCart />
      <CatalogCart />
      <CatalogCart />
      <CatalogCart />
    </CatalogItemsStyle>
  );
};

const CatalogItemsStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export default CatalogItems;
