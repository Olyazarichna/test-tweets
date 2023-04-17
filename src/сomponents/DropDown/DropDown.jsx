import { useState } from "react";
import style from "./DropDown.module.scss";

export const DropDown = ({ handleSelected }) => {
  const [selectedValue, setSelectedValue] = useState("showAll");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleSelected(event.target.value);
  };
  return (
    <>
      <label htmlFor="tweets" className={style.text}>
        Select:
      </label>
      <select
        onChange={handleChange}
        value={selectedValue}
        name="tweets"
        id="tweets"
        className={style.button}
      >
        <option value="showAll" className={style.option}>
          Show all
        </option>
        <option value="follow" className={style.option}>
          Follow
        </option>
        <option value="following" className={style.option}>
          Following
        </option>
      </select>
    </>
  );
};
