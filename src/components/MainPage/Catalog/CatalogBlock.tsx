import { FC, useState } from "react";
import styled from "styled-components";
import CatalogFilter from "./CatalogFilter";
import CatalogItems from "./CatalogItems";

const CatalogBlock: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");

  return (
    <CatalogBlockStyle id="catalog">
      <div className="container">
        <div className="head">
          <h2>Каталог</h2>
          <button
            className={isOpen ? "lines lines-open" : "lines"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="content">
          <CatalogFilter isOpen={isOpen} setGender={setGender} />
          <CatalogItems gender={gender} />
        </div>
      </div>
    </CatalogBlockStyle>
  );
};

const CatalogBlockStyle = styled.section`
  margin-bottom: 60px;
  padding-top: 60px;
  position: relative;

  .head {
    display: flex;
    justify-content: space-between;
  }

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

  .lines {
    display: none;
    flex-direction: column;
    gap: 5px;

    span {
      width: 30px;
      height: 5px;
      display: inline-block;
      background-color: var(--bg);
    }
  }

  @media (max-width: 810px) {
    .lines {
      display: flex;
      z-index: 3;
      span {
        transition: all 300ms linear;
      }
    }

    .lines-open {
      span:first-child {
        transform: rotate(-45deg) translate(-6px, 8px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: rotate(45deg) translate(-6px, -8px);
      }
    }
  }
`;

export default CatalogBlock;
