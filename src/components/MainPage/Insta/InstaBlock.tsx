import { FC } from "react";
import styled from "styled-components";
import InstaForm from "./InstaForm";
import InstaImages from "./InstaImages";

const InstaBlock: FC = () => {
  return (
    <InstaBlockStyle>
      <div className="container">
        <InstaForm />
        <InstaImages />
      </div>
    </InstaBlockStyle>
  );
};

const InstaBlockStyle = styled.section`
  margin-bottom: 80px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default InstaBlock;
