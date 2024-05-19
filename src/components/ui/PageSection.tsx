import { FC } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const PageSection: FC<IProps> = ({ children }) => {
  return <PageSectionStyle>{children}</PageSectionStyle>;
};

const PageSectionStyle = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10vh 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export default PageSection;
