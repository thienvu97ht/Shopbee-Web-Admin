import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import userApi from "../../api/user";

UserFeature.propTypes = {};

function UserFeature(props) {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      const fetchData = async () => {
        const user = await userApi.getUser();
        setUser(user);
      };
      fetchData();
    } else {
      history.push("/login");
    }
  }, [history]);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    history.push("/login");
  };

  return (
    <div>
      <p>Hello {user.username}</p>
      <img src={user.avatar} alt="avatar" width="150px" />
      <button onClick={handleLogOut}>Đăng xuất</button>
    </div>
  );
}

export default UserFeature;
