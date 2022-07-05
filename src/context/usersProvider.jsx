import { useState, createContext } from "react";

const UsersContext = createContext();

const UsersProviders = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user);
  const searchUser = async (search) => {
    try {
      const url = `https://api.github.com/users/${search}`;
      const response = await fetch(url);
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UsersContext.Provider value={{ searchUser, user }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProviders };
export default UsersContext;
