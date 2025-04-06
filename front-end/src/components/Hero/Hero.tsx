import styles from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWithButton } from "../FullWithButton/FullWithButton";

interface Props {
  heroImage: string;
}

export const Hero = ({ heroImage }: Props) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={styles.contentWrapper}>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWithButton onClick={() => console.log()}>
            Sprawdź produkty
          </FullWithButton>
        </div>
      </CenteredContent>
    </div>
  );
};
