import React, { createContext } from "react";
export const userDataContext = createContext();
const [user, setuser] = useState({
    email:'',
    fullName:{
        firstName:'',
        lastName:''
    }
})
const UserinContext = ({ children }) => {
  return (
    <div>
      <userDataContext.Provider value={[user, setuser]}>{children}</userDataContext.Provider>
    </div>
  );
};

export default UserinContext;
