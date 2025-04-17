import styles from "./Accordion.module.css";
import ARROW_ICON from "../../assets/arrow.png";
import { AccordionItems } from "../../types/types";
import { useState } from "react";

interface Props {
  items: AccordionItems[];
}

export const Accordion = ({ items }: Props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <ul>
      {items.map((el, index) => (
        <li key={el.title} onClick={() => setActiveItemIndex(index)}>
          <div className={styles.item}>
            <p>{el.title}</p>
            <img
              className={`${activeItemIndex === index ? "" : styles.expanded}`}
              src={ARROW_ICON}
              alt="Arrow icon"
            />
          </div>
          {activeItemIndex === index && <p>{el.content}</p>}
        </li>
      ))}
    </ul>
  );
};
