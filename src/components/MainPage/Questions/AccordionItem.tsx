import { FC, useRef } from "react";
import styled from "styled-components";
import { IAccData } from "./QuestionsBlock";

interface IProps {
  item: IAccData;
  clickHandler: (id: number) => void;
  isOpen: number | null;
}

const AccordionItem: FC<IProps> = ({ item, clickHandler, isOpen }) => {
  const itemRef = useRef<HTMLParagraphElement>(null);

  return (
    <AccordionItemStyle>
      <Input type="checkbox" name="question" id={`${item.id}`} />
      <Label htmlFor={`${item.id}`} onClick={() => clickHandler(item.id)}>
        <h3>{item.question}</h3>
        <p
          ref={itemRef}
          className={isOpen === item.id ? "active" : ""}
          style={
            isOpen === item.id
              ? { height: itemRef.current?.scrollHeight }
              : { height: 0 }
          }
        >
          {item.answer}
        </p>
      </Label>
    </AccordionItemStyle>
  );
};

const AccordionItemStyle = styled.li`
  border-bottom: 1px solid rgb(36, 36, 36);

  &:first-of-type {
    border-top: 1px solid rgb(36, 36, 36);
  }

  input:checked + label {
    &::after {
      transform: translate(0, -50%) rotate(45deg);
    }
  }
`;

const Input = styled.input`
  visibility: hidden;
  position: absolute;
`;

const Label = styled.label`
  display: block;
  padding: 25px 0 0;
  position: relative;

  p {
    opacity: 0;
    transition: all 200ms linear;
    height: 0;

    &.active {
      opacity: 1;
      margin-bottom: 17px;
      height: auto;
    }
  }

  &::after {
    content: url("./icons/question-plus.svg");
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 200ms linear;
  }
`;

export default AccordionItem;
