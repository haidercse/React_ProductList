import  { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";


export const UsersContextHook = () =>{
   return useContext(UsersContext);
}