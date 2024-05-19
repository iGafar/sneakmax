import { FC } from "react";
import styled from "styled-components";

const SelectionSize: FC = () => {
  return (
    <SelectionSizeStyle>
      <h3>Какой размер вам подойдет?</h3>
      <div className="sizes">
        <input type="checkbox" id="0-36" />
        <label htmlFor="0-36">менее 36</label>

        <input type="checkbox" id="36-38" />
        <label htmlFor="36-38">36-38</label>

        <input type="checkbox" id="39-41" />
        <label htmlFor="39-41">39-41</label>

        <input type="checkbox" id="42-44" />
        <label htmlFor="42-44">42-44</label>

        <input type="checkbox" id="45+" />
        <label htmlFor="45+">45 и больше</label>
      </div>
      <img src="./images/sizes.jpeg" alt="sizes" />
    </SelectionSizeStyle>
  );
};

const SelectionSizeStyle = styled.div`
  min-height: 432px;

  .sizes {
    display: flex;
    justify-content: space-between;
    max-width: 850px;
    margin-bottom: 22px;
  }

  img {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export default SelectionSize;
