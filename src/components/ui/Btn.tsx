import { FC } from "react";
import styled from "styled-components";

interface BtnProps {
  children: React.ReactNode;
  fnc?: () => void;
  total?: boolean;
}

const Btn: FC<BtnProps> = ({ children, fnc, total }) => {
  return (
    <BtnStyle type="button" onClick={fnc} disabled={total}>
      {children}
    </BtnStyle>
  );
};

const BtnStyle = styled.button`
  color: rgb(255, 255, 255);
  font-family: "Intro";
  font-size: 16px;
  line-height: 16px;
  border-radius: 4px;
  background: var(--accent);
  padding: 22px 47px;
  width: fit-content;

  &:hover {
    background: var(--accent-hover);
  }

  &:active {
    background: var(--accent-active);
  }

  &:disabled {
    background-color: var(--accent-hover);
    opacity: 0.8;
    cursor: auto;
  }
`;

export default Btn;
