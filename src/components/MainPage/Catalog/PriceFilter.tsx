import Nouislider from "nouislider-react";
import { FC, useState } from "react";
import styled from "styled-components";
import "nouislider/distribute/nouislider.css";

const PriceFilter: FC = () => {
  const [startPrice, setStartPrice] = useState<string>("0");
  const [endPrice, setEndPrice] = useState<string>("9999");

  return (
    <PriceFilterStyle>
      <h4>Цена, руб</h4>
      <div className="filter">
        <input
          type="number"
          min={startPrice}
          max={endPrice}
          value={`${Math.floor(+startPrice)}`}
          onChange={(e) => setStartPrice(e.target.value)}
        />
        <input
          type="number"
          min={startPrice}
          max={endPrice}
          value={`${Math.floor(+endPrice)}`}
          onChange={(e) => setEndPrice(e.target.value)}
        />
        <Nouislider
          range={{ min: 0, max: 9999 }}
          start={[startPrice, endPrice]}
          orientation="horizontal"
          connect
          step={1}
          onChange={([start, end]) => {
            setStartPrice(start);
            setEndPrice(end);
          }}
        />
      </div>
    </PriceFilterStyle>
  );
};

const PriceFilterStyle = styled.div`
  color: var(--text);
  font-size: 16px;
  margin-bottom: 29px;

  .filter {
    border: 1px solid var(--gray);
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
`;

export default PriceFilter;
