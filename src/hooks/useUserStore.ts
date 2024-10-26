import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/store/hook";
import { setUser } from "../app/store/slice";

export const useUserStore = () => {
  const { user, login } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();  
  const navigate = useNavigate();


  const onLogin = ({user}:{user:string,password:string}) => {
    dispatch(setUser({user, name:user}))
    navigate("/")
  }
  return {
    user,
    login,
    onLogin
  }
}