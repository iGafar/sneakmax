import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

interface IUser {
  name: string;
  tel: string;
}

const InstaForm: FC = () => {
  const { register, handleSubmit } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(data);
  };

  return (
    <InstaFormStyle onSubmit={handleSubmit(onSubmit)}>
      <h2>Есть вопросы?</h2>
      <p>Заполните форму и наш менеджер свяжется с вами</p>
      <input
        required
        type="text"
        placeholder="Ваше имя"
        {...register("name")}
      />
      <input
        required
        type="text"
        placeholder="Номер телефона"
        {...register("tel")}
      />
      <button type="submit">Отправить</button>
    </InstaFormStyle>
  );
};

const InstaFormStyle = styled.form`
  border-radius: 4px;
  background: var(--bg);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  text-align: center;

  h2 {
    color: rgb(255, 255, 255);
    font-family: "Intro";
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 20px;
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    max-width: 280px;
    margin-bottom: 30px;
  }

  input {
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  button {
    padding: 22px 47px;
    border-radius: 4px;
    background-color: var(--accent);
    color: rgb(255, 255, 255);
    font-family: "Intro";
    font-size: 16px;
    line-height: 16px;

    &:hover {
      background: var(--accent-hover);
    }

    &:active {
      background: var(--accent-active);
    }
  }
`;

export default InstaForm;
