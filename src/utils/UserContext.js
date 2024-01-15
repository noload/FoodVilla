import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "vaibhav kamble",
    email: "vaibhavkamble023@gmail.com",
  },
});

export default UserContext;
