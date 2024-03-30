import { FC, useState } from "react";
import styled from "styled-components";
import SelectionType from "./SelectionType";
import SelectionSize from "./SelectionSize";
import SelectionComent from "./SelectionComent";
import SelectionForm from "./SelectionForm";
import SelectionFinish from "./SelectionFinish";

const SelectionBlock: FC = () => {
  const [page, setPage] = useState<number>(1);

  if (page > 4) {
    setTimeout(() => {
      setPage(1);
    }, 2000);
  }

  return (
    <SelectionBlockStyle id="selection">
      <div className="container">
        <h2 className="title">
          {page < 4
            ? "Мы подберем идеальную пару для вас"
            : "Ваша подборка готова!"}
        </h2>
        <p className="subtitle">
          {page < 4
            ? "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями"
            : "Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог"}
        </p>
        {(page === 1 && <SelectionType />) ||
          (page === 2 && <SelectionSize />) ||
          (page === 3 && <SelectionComent />) ||
          (page === 4 && <SelectionForm setPage={setPage} />) ||
          (page === 5 && <SelectionFinish />)}

        <div
          className={page > 3 ? "pagination visibility-hidden" : "pagination"}
        >
          <p>{page} из 3</p>
          <button onClick={() => setPage((prev) => prev + 1)}>
            Следующий шаг
          </button>
        </div>
      </div>
    </SelectionBlockStyle>
  );
};

const SelectionBlockStyle = styled.section`
  padding: 60px 20px 0;
  margin-bottom: 60px;

  h3 {
    color: rgb(68, 75, 88);
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 15px;
  }

  .container {
    padding: 40px 100px;
    border-radius: 4px;
    background: var(--sec-bg);
  }

  .title {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 20px;
  }

  .subtitle {
    color: rgb(128, 128, 128);
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(128, 128, 128);
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgb(128, 128, 128);

    p {
      color: rgb(128, 128, 128);
      font-size: 16px;
      line-height: 19px;
    }

    button {
      color: rgb(68, 75, 88);
      font-family: "Intro";
      font-size: 16px;
      line-height: 16px;
      border: 1px solid rgb(68, 75, 88);
      border-radius: 4px;
      background: rgba(196, 196, 196, 0);
      padding: 22px 42px;
      transition: all 200ms linear;

      &:hover {
        background-color: var(--text);
        color: rgb(255, 255, 255);
      }
    }
  }

  input[type="checkbox"] {
    visibility: hidden;
    position: absolute;
  }

  label {
    color: rgb(0, 0, 0);
    font-size: 16px;
    line-height: 24px;
    position: relative;
    padding-left: 35px;
    display: inline-block;

    &::before {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      box-sizing: border-box;
      border: 1px solid rgb(219, 187, 169);
      border-radius: 4px;
      left: 0;
    }
  }
  input:checked + label::after {
    content: "";
    background: url("./icons/check.svg") no-repeat center center;
    position: absolute;
    left: 0;
    width: 24px;
    height: 24px;
    display: inline-block;
    text-align: center;
  }

  .visibility-hidden {
    display: none;
  }
`;

export default SelectionBlock;
