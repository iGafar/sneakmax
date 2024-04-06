import { FC } from "react";
import styled from "styled-components";

const SelectionComent: FC = () => {
  return (
    <SelectionComentStyle>
      <h3>Уточните какие-либо моменты</h3>
      <textarea name="coment" placeholder="Введите сообщение"></textarea>
    </SelectionComentStyle>
  );
};

const SelectionComentStyle = styled.div`
  min-height: 432px;

  textarea {
    margin-bottom: 120px;
    width: min(465px, 100%);
    height: 245px;
    padding: 18px 20px;
    border-radius: 4px;
  }
`;

export default SelectionComent;
