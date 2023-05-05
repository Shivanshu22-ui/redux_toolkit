import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  return <button onClick={()=>{dispatch(deleteUser())}}>DeleteAllUser</button>;
};