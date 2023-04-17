import style from "./Home.module.scss";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import pic1 from "../../images/film.jpg";
import pic2 from "../../images/bag.jpg";
import pic3 from "../../images/cycle.jpg";
import pic4 from "../../images/letters.jpg";
import pic5 from "../../images/news.jpg";
import pic6 from "../../images/rapp.jpg";
import pic7 from "../../images/tree.jpg";

export const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.pictureWrapper}>
        <div className={style.item_1}>
          <img className={style.img} src={pic1} alt="film" />
        </div>
        <div className={style.item_2}>
          <img className={style.img} src={pic4} alt="letters" />
        </div>
        <div className={style.item_3}>
          <img className={style.img} src={pic7} alt="randomPic" />
        </div>
        <div className={style.item_4}>
          <img className={style.img} src={pic2} alt="bag" />
        </div>
        <div className={style.item_5}>
          <img className={style.img} src={pic5} alt="news" />
        </div>
        <div className={style.item_6}>
          <img className={style.img} src={pic6} alt="rapp" />
        </div> 
         <div className={style.item_7}>
          <img className={style.img} src={pic3} alt="tree" />
        </div>
      </div>
      <Link className={style.btn} to="tweets">
        Get started
      </Link>
    </div>
  );
};
