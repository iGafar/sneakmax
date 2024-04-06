import { FC, useCallback, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Header, MainBlock, Footer, BasketBlock } from "./components";
import Router from "./router/Router";

const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);

  const isOpenCallback = useCallback(() => {
    if (window.innerWidth < 810) setIsOpen(!isOpen);
  }, [isOpen]);

  const isBasketOpenCallback = useCallback(
    () => setIsBasketOpen(!isBasketOpen),
    [isBasketOpen]
  );

  return (
    <>
      <Global $isOpen={isOpen} $isBasketOpen={isBasketOpen} />
      <Header
        isOpen={isOpen}
        setIsOpen={isOpenCallback}
        setIsBasketOpen={isBasketOpenCallback}
      />
      <main>
        {isBasketOpen && <BasketBlock setIsBasketOpen={isBasketOpenCallback} />}
        <MainBlock />
        <Router />
      </main>
      <Footer />
    </>
  );
};

const Global = createGlobalStyle<{ $isOpen: boolean; $isBasketOpen: boolean }>`
	html {
		font-size: 10px;
		scroll-behavior: smooth;
		overflow: ${(props) => (props.$isOpen || props.$isBasketOpen ? "hidden" : "")};
	}

	body {
		font-family: 'Inter', sans-serif;
	}

	.container {
		margin: 0 auto;
		padding: 0 max(3rem, 10px);
		max-width: 1240px;
	}

	@media (max-width: 1000px) {
		html {
			font-size: 8px;
		}
	}

	@media (max-width: 900px) {
		html {
			font-size: 6px;
		}
	}

	@media (max-width: 650px) {
		html {
			font-size: 5px;
		}
	}

	@media (max-width: 550px) {
		html {
			font-size: 4px;
		}
	}

	@media (max-width: 450px) {
		html {
			font-size: 3px;
		}
	}
`;

export default App;
