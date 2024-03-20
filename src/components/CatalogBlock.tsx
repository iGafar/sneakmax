import { FC } from "react";
import styled from "styled-components";
import CatalogFilter from "./CatalogFilter";
import CatalogItems from "./CatalogItems";

const CatalogBlock: FC = () => {
  return (
    <CatalogBlockStyle>
      <div className="container">
        <h2>Каталог</h2>
        <div className="content">
          <CatalogFilter />
          <CatalogItems />
        </div>
      </div>
    </CatalogBlockStyle>
  );
};

const CatalogBlockStyle = styled.section`
  padding: 60px 0;

  .content {
    display: flex;
    gap: 20px;
  }

  h2 {
    color: var(--text);
    font-family: "Intro", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 40px;
  }
`;

export default CatalogBlock;
