import { FC, useState } from "react";
import styled from "styled-components";

const CatalogCard: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <CatalogCardStyle $isOpenModal={isOpenModal}>
      <div
        className={isOpenModal ? "modal modal-open" : "modal"}
        onClick={() => setIsOpenModal((prev) => !prev)}
      >
        <div className="options">
          <button className="show">
            <img src="./icons/show.svg" alt="show sneakers" />
          </button>
          <button className="add">
            <img src="./icons/add-to-basket.svg" alt="add to basket" />
          </button>
        </div>
        <picture>
          <img src="./images/sneakers.jpeg" alt="sneakers" />
        </picture>
      </div>
      <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
      <p>11 000 р₽</p>
    </CatalogCardStyle>
  );
};

const CatalogCardStyle = styled.li<{ $isOpenModal: boolean }>`
  .modal {
    position: relative;
  }

  .options {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition: all 200ms linear;

    button {
      width: 80px;
      height: 80px;
      background-color: var(--text);
      border-radius: 50%;

      @media (min-width: 810px) {
        &:hover {
          background-color: rgb(49, 52, 60);
        }
      }
    }
  }

  @media (min-width: 810px) {
    .options:hover {
      opacity: 1;
    }
  }

  @media (max-width: 810px) {
    .options {
      opacity: ${(props) => (props.$isOpenModal ? 1 : 0)};
    }
  }

  .options:focus {
    opacity: 1;
  }

  picture {
    max-width: 280px;
    height: 293px;
    display: inline-block;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-bottom: 6px;
    color: rgb(68, 75, 88);
    font-size: 16px;
    line-height: 19px;
  }

  p {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 20px;
    line-height: 20px;
  }
`;

export default CatalogCard;
