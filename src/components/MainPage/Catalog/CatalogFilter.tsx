import { FC } from "react";
import styled from "styled-components";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import SizesFilter from "./SizesFilter";

interface IProps {
  isOpen: boolean;
}

const CatalogFilter: FC<IProps> = ({ isOpen }) => {
  return (
    <CatalogFilterStyle className={isOpen ? "open" : ""}>
      <div>
        <h3>Подбор по параметрам</h3>
      </div>
      <PriceFilter />
      <GenderFilter />
      <SizesFilter />
      <button type="button">Применить</button>
      <button type="reset">Сбросить</button>
    </CatalogFilterStyle>
  );
};

const CatalogFilterStyle = styled.form`
  background: var(--sec-bg);
  border-radius: 4px;
  width: max-content;
  padding: 15px 20px 20px;
  max-width: 280px;
  height: fit-content;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfiled;
    -moz-appearance: textfield;
    background-color: var(--sec-bg);
  }

  h3 {
    margin-bottom: 15px;
    color: var(--text);
    font-size: 24px;
    line-height: 29px;
  }
  h4 {
    color: var(--text);
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 6px;
  }

  button[type="button"] {
    color: var(--white);
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid var(--sec-bg);
    border-radius: 4px;
    background-color: var(--text);
    padding: 22px 48px;
    width: 100%;
    margin-bottom: 20px;

    &:hover {
      background: rgb(49, 52, 60);
    }

    &:active {
      background: rgba(49, 52, 60, 0.97);
    }
  }

  button[type="reset"] {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    width: 100%;
    text-transform: lowercase;

    &:hover {
      color: rgba(68, 75, 88, 0.8);
    }
  }

  @media (max-width: 810px) {
    position: absolute;
    left: -100%;
    transition: all 200ms linear;

    &.open {
      left: 20px;
    }
  }
`;

export default CatalogFilter;
