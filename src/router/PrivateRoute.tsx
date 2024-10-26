import { useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/useUserStore";

type Props = {
  Component: JSX.Element;
}

export const PrivateRoute = ({Component}:Props) => {
  const {login} = useUserStore();
  const navigate = useNavigate();
  return(
    login ? <Component /> : navigate("/login")
  )

}