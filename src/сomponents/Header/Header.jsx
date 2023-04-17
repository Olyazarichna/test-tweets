import icon from "../../images/twitterIcon.png";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <p className={style.text}>Tweets</p>
      <img src={icon} alt="twitterIcon" width={50} />
    </header>
  );
};
