import { FC, useState } from "react";
import styled from "styled-components";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];

const CatalogFilter: FC = () => {
  const [startPrice, setStartPrice] = useState<string>("0");
  const [endPrice, setEndPrice] = useState<string>("9999");

  return (
    <CatalogFilterStyle>
      <h3>Подбор по параметрам</h3>
      <div className="price">
        <h4>Цена, руб</h4>
        <div className="price-filter">
          <input
            type="number"
            min={startPrice}
            max={endPrice}
            placeholder={startPrice}
            onChange={(e) => setStartPrice(e.target.value)}
          />
          <input
            type="number"
            min={startPrice}
            max={endPrice}
            placeholder={endPrice}
          />
          <Nouislider
            range={{ min: 0, max: 9999 }}
            start={[startPrice, endPrice]}
            orientation="horizontal"
            connect
          />
        </div>
      </div>
      <div className="gender">
        <h4>Пол</h4>
        <div className="gender-filter">
          <input type="radio" name="gender" id="male" />
          <label htmlFor="male">Мужской</label>
          <input type="radio" name="gender" id="female" />
          <label htmlFor="female">Женский</label>
        </div>
      </div>
      <div className="sizes">
        <h4>Размер</h4>
        <div className="sizes-filter">
          {sizes.map((size) => (
            <>
              <input type="checkbox" name={size.toString()} id="" />
              <label htmlFor={size.toString()}>{size.toString()}</label>
            </>
          ))}
        </div>
      </div>
      <button>Применить</button>
      <button>Cбросить</button>
    </CatalogFilterStyle>
  );
};

const CatalogFilterStyle = styled.div`
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

  .price {
    color: var(--text);
    font-size: 16px;
    margin-bottom: 29px;

    &-filter {
      border: 1px solid rgb(178, 181, 187);
      border-radius: 4px;
      width: max-content;
      padding: 17px 0;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 34px;
        background-color: var(--gray);
      }

      input {
        max-width: 120px;
        text-align: center;
      }
    }
  }

  .gender {
    margin-bottom: 20px;

    &-filter {
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        visibility: hidden;
        position: absolute;
      }

      label {
        position: relative;
        height: 24px;
        line-height: 24px;
        padding-left: 34px;

        &::before {
          content: "";
          width: 24px;
          height: 24px;
          border: 1px solid rgb(219, 187, 169);
          border-radius: 4px;
          position: absolute;
          left: 0;
        }
      }

      input:checked + label::before {
        background: url("./public/icons/check.svg") no-repeat center;
      }
    }
  }

  .noUi {
    &-target {
      width: 100%;
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
      background: none;
      border: none;
    }

    &-horizontal {
      height: 4px;
    }

    &-connect {
      background: #444b58;
    }

    &-handle {
      width: 6px;
      height: 20px;
      background-color: #444b58;
      box-shadow: none;
      border: none;
      top: -8px;
      right: -3px;

      &::before {
        content: none;
      }
      &::after {
        content: none;
      }
    }
  }

  .sizes {
    &-filter {
      display: flex;
      flex-wrap: wrap;

      input {
        visibility: hidden;
        position: absolute;
      }

      label {
        width: calc(100% / 3);
        padding: 26px 0;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid rgb(219, 187, 169);

        @media (min-width: 768px) {
          &:hover {
            cursor: pointer;
            background: rgba(219, 187, 169, 0.7);
          }

          &:active {
            background: rgba(219, 187, 169, 1);
          }
        }
      }
    }
  }
`;

export default CatalogFilter;
