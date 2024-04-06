import { FC } from "react";
import styled from "styled-components";

const GenderFilter: FC = () => {
  return (
    <GenderFilterStyle>
      <h4>Пол</h4>
      <div className="filter">
        <input type="radio" name="gender" id="male" />
        <label htmlFor="male">Мужской</label>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="female">Женский</label>
      </div>
    </GenderFilterStyle>
  );
};

const GenderFilterStyle = styled.div`
  margin-bottom: 20px;

  .filter {
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
`;

export default GenderFilter;
