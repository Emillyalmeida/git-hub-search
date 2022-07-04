import api from "../../services/api";
import { useCallback, useContext } from "react";
import { createContext, useState } from "react";

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useTasks must to be used within ");
  }

  return context;
};

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("emillyalmeida");
  const [choose, setChoose] = useState("repos");
  const [User, setUser] = useState({});
  const [info, setInfo] = useState({});

  const [loading, setLoading] = useState(false);

  const LoadingUser = useCallback(() => {
    setLoading(true);
    api
      .get(`/${name}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  const LoadingReposouStars = useCallback(() => {
    setLoading(true);
    api
      .get(`/${name}/${choose}`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [choose]);

  return (
    <UserContext.Provider
      value={{
        User,
        setName,
        setChoose,
        loading,
        LoadingUser,
        LoadingReposouStars,
        info,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default useUser;
