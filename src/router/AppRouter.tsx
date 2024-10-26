import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DashboardPage } from "../dashboard/page/DashboardPage"
import { NotFoundPage } from "../notFound/page/NotFoundPage"
import { PrivateRoute } from "./PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute Component={DashboardPage}/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  },
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />

  )
}