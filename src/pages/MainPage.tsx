import { FC } from "react";
import {
  CatalogBlock,
  SelectionBlock,
  AboutUsBlock,
  TeamBlock,
  QuestionsBlock,
  ContactsBlock,
  InstaBlock,
} from "../components";

const MainPage: FC = () => {
  return (
    <>
      <CatalogBlock />
      <AboutUsBlock />
      <SelectionBlock />
      <TeamBlock />
      <QuestionsBlock />
      <ContactsBlock />
      <InstaBlock />
    </>
  );
};

export default MainPage;
