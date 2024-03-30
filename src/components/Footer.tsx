import { FC } from "react";
import styled from "styled-components";

const Footer: FC = () => {
  return (
    <FooterStyle>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            SneakMax
          </a>
          <ul>
            <li>
              <a href="#catalog">Каталог</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#selection">Подбор товара</a>
            </li>
            <li>
              <a href="#team">Наша команда</a>
            </li>
            <li>
              <a href="#questions">Вопросы</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  padding: 20px 0;
  background-color: var(--text);
  color: var(--white);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .logo {
    color: var(--white);
    font-family: "Intro", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    li {
      align-self: center;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    span {
      position: absolute;
      right: -8px;
      bottom: -8px;
      display: inline-block;
      width: 16px;
      height: 16px;
      background-color: var(--accent);
      border-radius: 50%;
      line-height: 16px;
    }
  }
`;

export default Footer;
