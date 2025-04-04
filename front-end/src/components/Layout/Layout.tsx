import { ReactNode } from "react";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => (
  <>
    <MainContent>
      <TopBar>
        <MainMenu />
        <Logo />
        <div>
          <CurrencySelector />
          <IconMenu />
        </div>
      </TopBar>
      <CategoryMenu />
      {children}
    </MainContent>
    <Footer />
  </>
);
