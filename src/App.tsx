import { FC } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import CatalogBlock from "./components/CatalogBlock";

const App: FC = () => {
  return (
    <>
      <Global />
      <Header />
      <main>
        <MainBlock />
        <CatalogBlock />
      </main>
    </>
  );
};

const Global = createGlobalStyle`
	html {
		font-size: 10px;
	}

	body {
		font-family: 'Inter', sans-serif;
	}

	.container {
		margin: 0 auto;
		padding: 0 30px;
		max-width: 1240px;
	}
`;

export default App;
