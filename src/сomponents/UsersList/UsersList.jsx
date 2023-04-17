import { useState, useEffect } from "react";
import { getUsers } from "../../services/getUsers";
import { UserCard } from "../UserCard/UserCard";
import style from "../UsersList/UsersList.module.scss";
import { Header } from "../Header/Header";
import { DropDown } from "../DropDown/DropDown";

export const UsersList = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [value, setValue] = useState("showAll");

  const handleSelected = (value) => {
    setValue(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers(page);
      setUsers(users.concat(data));
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const followingUsers = Object.keys(localStorage).filter(
      (key) => localStorage.getItem(key) === "true"
    );
    setFollowing(followingUsers);
  }, []);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className={style.container}>
      <Header />
      <DropDown handleSelected={handleSelected} />
      <ul className={style.list}>
        {users
          ?.filter((user) =>
            value === "showAll"
              ? true
              : value === "follow"
              ? !following.includes(user.id.toString())
              : following.includes(user.id.toString())
          )
          .map((user) => (
            <li key={user.id}>
              <UserCard
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
                isFollowing={following.includes(user.id.toString())}
              />
            </li>
          ))}
      </ul>
      {users.length < 30 && (
        <button className={style.btn} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};