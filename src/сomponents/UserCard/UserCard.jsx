import { useState, useEffect } from "react";
import logo from "../../images/Logo.png";
import picture from "../../images/picture.png";
import style from "./UserCard.module.scss";
import { updateUserFollowers } from "../../services/updateUserFollowers.js";

export const UserCard = (user) => {
  const [followers, setFollowers] = useState(user.followers);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const isUserFollowing = localStorage.getItem(user.id);
    setIsFollowing(Boolean(isUserFollowing));
  }, [user.id]);

  const incrementFollowers = async () => {
    setIsFollowing(true);
    const newFollowersCount = followers + 1;
    setFollowers(newFollowersCount);
    localStorage.setItem(user.id, "true");
    try {
      await updateUserFollowers(user.id, newFollowersCount);
    } catch (error) {
      console.log(error.message);
    }
  };

  const decrementFollowers = async () => {
    setIsFollowing(false);
    const newFollowersCount = followers - 1;
    setFollowers(newFollowersCount);
    localStorage.setItem(user.id, "");
    try {
      await updateUserFollowers(user.id, newFollowersCount);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFollowClick = async () => {
    if (!isFollowing) {
      await incrementFollowers();
    } else {
      await decrementFollowers();
    }
  };

  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo" />
      <img className={style.img} src={picture} alt="backgroundIcons" />
      <div>
        <img className={style.avatar} src={user.avatar} alt="avatar" />
        <div className={style.line}></div>
      </div>
      <div className={style.textWrapper}>
        <p className={style.text}>{user.tweets} Tweets</p>
        <p className={style.text}>
          {followers?.toLocaleString("en-US")} Followers
        </p>
      </div>
      <button
        className={!isFollowing ? style.btn : style.activeBtn}
        onClick={handleFollowClick}
      >
        {isFollowing ? "Follow" : "Following"}
      </button>
    </div>
  );
};
