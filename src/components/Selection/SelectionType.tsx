import { FC } from "react";
import styled from "styled-components";
import SelectionCard from "./SelectionCard";

const selectionItems = [
  { value: "vibrams", label: "Вибрамы" },
  { value: "sneakers", label: "Кеды" },
  { value: "slip-ons", label: "Слипоны" },
  { value: "snickers", label: "Сникерсы" },
  { value: "hightops", label: "Хайтопы" },
  { value: "czechs", label: "Чешки" },
];

const SelectionType: FC = () => {
  return (
    <SelectionTypeStyle>
      <h3>Какой тип кроссовок рассматриваете?</h3>
      <ul>
        {selectionItems.map((item) => (
          <SelectionCard
            key={item.value}
            value={item.value}
            label={item.label}
          />
        ))}
      </ul>
    </SelectionTypeStyle>
  );
};

const SelectionTypeStyle = styled.div`
  min-height: 432px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 40px;
  }
`;

export default SelectionType;
