import { FC } from "react";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            SneakMax
          </a>
          <ul>
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Подбор товара</a>
            </li>
            <li>
              <a href="#">Наша команда</a>
            </li>
            <li>
              <a href="#">Доставка и оплата</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <button>
                Корзина <img src="./icons/basket.svg" alt="корзина" />
                <span>1</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding: 20px 0 0;
  background-color: var(--bg);
  color: var(--white);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
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

export default Header;
