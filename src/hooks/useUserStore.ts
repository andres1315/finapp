import { useAppDispatch, useAppSelector } from "../app/store/hook";

export const useUserStore = () => {
  const { user, login } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();  

  return {
    user,
    login
  }
}