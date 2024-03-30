import { FC } from "react";
import styled from "styled-components";

interface IProps {
  value: string;
  label: string;
}

const SelectionCard: FC<IProps> = ({ value, label }) => {
  return (
    <SelectionCardStyle>
      <picture>
        <img src="./images/selection-sneakers.jpeg" alt={label} />
      </picture>
      <input type="checkbox" name="sneakers-type" id={value} />
      <label htmlFor={value}>{label}</label>
    </SelectionCardStyle>
  );
};

const SelectionCardStyle = styled.li`
  max-width: min-content;
  picture {
    margin-bottom: 15px;
    width: 280px;
    height: 120px;
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;

    img {
      object-fit: cover;
    }
  }
`;

export default SelectionCard;
