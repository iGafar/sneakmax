import { FC } from "react";
import {
  LeftBlock,
  PageBack,
  PageSection,
  PageWrapper,
  RightBlock,
} from "../components";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ISneakers } from "../store/types";
import { RootState } from "../store/store";
import { useParams } from "react-router-dom";

const CardPage: FC = () => {
  const sneakers = useSelector<RootState, ISneakers[]>(
    (state) => state.sneakers.data
  );
  const { id } = useParams<{ id: string }>();
  const itemId = id ? id : 0;

  const itemData = sneakers.find((item) => item.id === +itemId);

  if (!itemData) {
    return <div>Item not found</div>;
  }

  return (
    <PageSection>
      <PageBack />
      <PageWrapper maxw="1140">
        <BlocksWrapper>
          <LeftBlock itemData={itemData} />
          <RightBlock itemData={itemData} />
        </BlocksWrapper>
      </PageWrapper>
    </PageSection>
  );
};

const BlocksWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export default CardPage;
