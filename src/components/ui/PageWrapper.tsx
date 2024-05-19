import { FC } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  maxw: string;
}

const PageWrapper: FC<IProps> = ({ children, maxw }) => {
  return <PageWrapperStyle $maxw={maxw}>{children}</PageWrapperStyle>;
};

const PageWrapperStyle = styled.div<{ $maxw: string }>`
  background: rgb(255, 255, 255);
  max-width: ${(props) => props.$maxw}px;
  padding: 40px;
  z-index: 5;
`;

export default PageWrapper;
