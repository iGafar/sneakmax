import { FC } from "react";
import styled from "styled-components";

const InstaImages: FC = () => {
  return (
    <InstaImagesStyle>
      <img src="./icons/insta.png" alt="insta" />
      <div className="images">
        <div className="column">
          <picture>
            <img src="./images/insta1.jpeg" alt="insta1" />
          </picture>
          <picture>
            <img src="./images/insta2.jpeg" alt="insta2" />
          </picture>
        </div>
        <picture>
          <img src="./images/insta3.jpeg" alt="insta3" />
        </picture>
        <div className="column">
          <picture>
            <img src="./images/insta4.jpeg" alt="insta4" />
          </picture>
          <picture>
            <img src="./images/insta5.jpeg" alt="insta5" />
          </picture>
        </div>
      </div>
    </InstaImagesStyle>
  );
};

const InstaImagesStyle = styled.div`
  text-align: center;

  & > img {
    max-width: 157px;
    margin-bottom: 10px;
  }

  .images {
    display: flex;
    gap: 18px;

    picture {
      max-width: 330px;
      max-height: 336px;
      overflow: hidden;
      border-radius: 4px;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 15px;

      picture {
        max-width: 157px;
        max-height: 160px;
      }
    }
  }
`;

export default InstaImages;
