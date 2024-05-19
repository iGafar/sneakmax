import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageBack: FC = () => {
  const navigate = useNavigate();

  return <PageBackStyle onClick={() => navigate(-1)}></PageBackStyle>;
};

const PageBackStyle = styled.div`
  background: rgba(68, 75, 88, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default PageBack;
