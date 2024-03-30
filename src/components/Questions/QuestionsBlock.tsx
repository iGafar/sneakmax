import { FC, useState } from "react";
import styled from "styled-components";
import AccordionItem from "./AccordionItem";

export interface IAccData {
  id: number;
  question: string;
  answer: string;
}

const accArr: IAccData[] = [
  {
    id: 1,
    question: "Вопрос 1",
    answer:
      "А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми",
  },
  {
    id: 2,
    question: "Вопрос 2",
    answer:
      "А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми",
  },
];

const QuestionsBlock: FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const clickHandler = (id: number) => {
    if (id === isOpen) setIsOpen(null);
    else setIsOpen(id);
  };

  return (
    <QuestionsBlockStyle id="questions">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>
        <ul>
          {accArr.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              clickHandler={clickHandler}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </div>
    </QuestionsBlockStyle>
  );
};

const QuestionsBlockStyle = styled.section`
  margin-bottom: 60px;
  padding-top: 60px;

  h2 {
    color: rgb(68, 75, 88);
    font-family: "Intro";
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 38px;
  }

  h3 {
    color: rgb(36, 36, 36);
    font-family: "Intro";
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 25px;
  }

  p {
    color: rgba(36, 36, 36, 0.5);
    font-size: 16px;
    line-height: 140%;
  }
`;

export default QuestionsBlock;
