import notFound from "../../images/notFound.jpg";
import style from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <img className={style.img} src={notFound} alt="tweets"/>
      <div className={style.textContainer}>
        <p className={style.text}>
          I just wanna say that page not fount, but you still have
         <Link className={style.link} to='/'> homepage.</Link>
        </p>
      </div>
    </>
  );
};
