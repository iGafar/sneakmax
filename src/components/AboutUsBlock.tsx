import { FC } from "react";
import styled from "styled-components";

const AboutUsBlock: FC = () => {
  return (
    <AboutUsBlockStyle id="about">
      <div className="container">
        <h2>Пара слов о нас</h2>
        <blockquote>
          <p>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
          </p>
          <cite>SneakMax</cite>
        </blockquote>
      </div>
    </AboutUsBlockStyle>
  );
};

const AboutUsBlockStyle = styled.section`
  color: rgb(255, 255, 255);
  background: var(--bg);

  .container {
    background: url("./images/about-image.png") no-repeat right;
    background-size: auto 100%;
    padding-top: min(222px, 14vw);
    padding-bottom: min(160px, 10vw);
  }

  h2 {
    font-family: "Intro";
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 19px;
    z-index: 2;
    position: relative;
  }

  blockquote {
    max-width: 380px;
    z-index: 2;
    position: relative;
  }

  p {
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 15px;
  }

  cite {
    font-family: "Intro";
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }

  @media (max-width: 810px) {
    blockquote {
      max-width: none;
      background-color: var(--bg);
    }
  }
`;

export default AboutUsBlock;
