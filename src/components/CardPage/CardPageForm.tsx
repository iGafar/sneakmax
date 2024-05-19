import { FC } from "react";
import styled from "styled-components";
import Btn from "../ui/Btn";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { postBasket } from "../../store/slices/basketSlice";
import { ISneakers } from "../../store/types";

interface IProps {
  itemData: ISneakers;
}

const CardPageForm: FC<IProps> = ({ itemData }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <CardPageFormStyle>
      <h4>Выберите размер</h4>
      <Sizes>
        {itemData.sizes.map((size) => (
          <li key={size}>
            <input type="radio" name="size" id={size.toString()} />
            <label htmlFor={size.toString()}>{size}</label>
          </li>
        ))}
      </Sizes>

      <Price>
        19 789 ₽ <span>20 578 ₽</span>
      </Price>

      <Btn fnc={() => dispatch(postBasket(itemData))} total={false}>
        Заказать
      </Btn>
    </CardPageFormStyle>
  );
};

const CardPageFormStyle = styled.form`
  h4 {
    color: rgb(68, 75, 88);
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 15px;
  }

  input {
    visibility: hidden;
    position: absolute;
  }

  & > button {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Sizes = styled.ul`
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  & label {
    padding: 10px 26px;
    box-sizing: border-box;
    border: 1px solid var(--gray);
    border-radius: 4px;
    background: var(--white);
    display: inline-block;
  }

  input:checked + label {
    background-color: var(--accent);
    color: var(--white);
  }
`;

const Price = styled.p`
  color: rgb(68, 75, 88);
  font-family: "Intro Bold";
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 80px;

  span {
    color: rgb(178, 181, 187);
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: line-through;
    margin-left: 15px;
  }
`;

export default CardPageForm;
