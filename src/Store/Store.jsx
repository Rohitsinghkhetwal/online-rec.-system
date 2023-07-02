import {create} from "zustand";
import { persist } from "zustand/middleware";



let useStore = (set, get) => ({
  registeredUsers : [],
  addUserToRegister: ({ userDetails }) => {
    console.log(userDetails);
    const newUserDetails = {
      _id: userDetails._id,
      firstName : userDetails.firstName,
      lastName : userDetails.lastName,
      jobrole : userDetails.jobrole,
      email : userDetails.email,
      phone : userDetails.phone,
      location : userDetails.location,
      message : userDetails.message,
    };
   
    const usersInRegister = get().registeredUsers;

    const updatedRegister = [...usersInRegister, newUserDetails];
    set({
      registeredUsers : updatedRegister,
    });
  },
});
useStore = persist(useStore, { name: "userStorage" });
useStore = create(useStore);
export default useStore;