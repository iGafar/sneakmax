import { FC, memo } from "react";
import styled from "styled-components";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
  setIsBasketOpen: () => void;
}

interface NavItem {
  title: string;
  id: string;
}

const navList: NavItem[] = [
  { title: "Каталог", id: "catalog" },
  { title: "О нас", id: "about" },
  { title: "Подбор товара", id: "selection" },
  { title: "Наша команда", id: "team" },
  { title: "Вопросы", id: "questions" },
  { title: "Контакты", id: "contacts" },
];

const Header: FC<IProps> = memo(({ isOpen, setIsOpen, setIsBasketOpen }) => {
  return (
    <HeaderStyle onClick={() => setIsOpen()}>
      <div className="container">
        <nav>
          <p className="logo">SneakMax</p>
          <ul className={isOpen ? "list list-open" : "list"}>
            {navList.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
            <li>
              <button onClick={() => setIsBasketOpen()}>
                Корзина <img src="./icons/basket.svg" alt="корзина" />
                <span>1</span>
              </button>
            </li>
          </ul>
          <button
            className={isOpen ? "lines lines-open" : "lines"}
            onClick={() => setIsOpen()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </HeaderStyle>
  );
});

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
    font-size: max(3rem, 25px);
    font-weight: 700;
    line-height: 30px;
  }

  .list {
    display: flex;
    justify-content: space-between;
    gap: max(4rem, 15px);

    li {
      align-self: center;

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
    }
  }

  .lines {
    display: none;
    flex-direction: column;
    gap: 5px;

    span {
      width: 30px;
      height: 5px;
      display: inline-block;
      background-color: var(--white);
    }
  }

  @media (max-width: 810px) {
    .logo {
      z-index: 4;
    }

    .list {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: var(--bg);
      z-index: 3;
      flex-direction: column;
      justify-content: center;
      transform: translateY(-100%);
      transition: all 300ms linear;

      li {
        font-size: 25px;

        img {
          width: 30px;
        }
      }

      &-open {
        transform: translate(0%);
      }
    }

    .lines {
      display: flex;
      z-index: 3;
      span {
        transition: all 300ms linear;
      }
    }

    .lines-open {
      span:first-child {
        transform: rotate(-45deg) translate(-6px, 8px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: rotate(45deg) translate(-6px, -8px);
      }
    }
  }
`;

export default Header;
