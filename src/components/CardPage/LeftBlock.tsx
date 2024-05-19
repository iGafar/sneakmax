import { FC } from "react";
import styled from "styled-components";
import { ISneakers } from "../../store/types";

interface IProps {
  itemData: ISneakers;
}

const LeftBlock: FC<IProps> = ({ itemData }) => {
  return (
    <LeftBlockStyle>
      <picture>
        <img src={itemData.imgUrl} alt={itemData.title} />
      </picture>
      <h3>Описание</h3>
      <p>{itemData.description}</p>
    </LeftBlockStyle>
  );
};

const LeftBlockStyle = styled.div`
  max-width: 520px;

  picture {
    max-width: 520px;
    max-height: 546px;
    display: flex;
    align-items: center;
    margin-bottom: 52px;

    img {
      width: 100%;
    }
  }

  h3 {
    color: rgb(68, 75, 88);
    font-size: 24px;
    line-height: 15px;
    margin-bottom: 15px;
  }

  p {
    color: rgb(68, 75, 88);
    font-size: 16px;
    line-height: 140%;
  }
`;

export default LeftBlock;
