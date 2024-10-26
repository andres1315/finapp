import { useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/useUserStore";
import { useEffect } from "react";

type Props = {
  Component: React.FC;
}

export const PrivateRoute = ({Component}:Props) => {
  const {login} = useUserStore();
  console.log(login)
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!login){
      navigate("/login")
    }
  }, [login])
  return(
    login ? <Component /> :null
  )

}