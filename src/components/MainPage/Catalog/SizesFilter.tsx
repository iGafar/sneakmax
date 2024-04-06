import { FC } from "react";
import styled from "styled-components";

const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];

const SizesFilter: FC = () => {
  return (
    <SizesFilterStyle>
      <h4>Размер</h4>

      <ul className="filter">
        {sizes.map((size) => (
          <li key={size}>
            <input
              type="checkbox"
              name={size.toString()}
              id={size.toString()}
            />
            <label htmlFor={size.toString()}>{size.toString()}</label>
          </li>
        ))}
      </ul>
    </SizesFilterStyle>
  );
};

const SizesFilterStyle = styled.div`
  margin-bottom: 20px;

  .filter {
    display: flex;
    flex-wrap: wrap;

    input {
      visibility: hidden;
      position: absolute;
    }

    input:checked + label {
      background-color: var(--small-text);
    }

    li {
      width: calc(100% / 3);
      label {
        display: inline-block;
        padding: 26px 0;
        width: 100%;
        text-align: center;
        border: 1px solid rgb(219, 187, 169);
      }

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
`;

export default SizesFilter;
