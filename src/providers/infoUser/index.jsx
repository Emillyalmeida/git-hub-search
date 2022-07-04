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
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);

  const [loading, setLoading] = useState(true);

  const LoadingUser = useCallback(() => {
    setLoading(true);
    api
      .get(`/${name}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        LoadingRepos();
        LoadingStarred();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUser({});
        setLoading(false);
      });
  }, [name]);

  const LoadingRepos = useCallback(() => {
    api
      .get(`/${name}/repos`)
      .then((res) => {
        console.log(res.data);
        setRepos(res.data);
        return;
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [name]);

  const LoadingStarred = useCallback(() => {
    api
      .get(`/${name}/starred`)
      .then((res) => {
        console.log(res.data);
        setStarred(res.data);
        return;
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [name]);

  return (
    <UserContext.Provider
      value={{
        User,
        setName,
        setChoose,
        loading,
        LoadingUser,
        repos,
        starred,
        choose,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default useUser;
