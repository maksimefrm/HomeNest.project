import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import CardPage from "./pages/CardPage/CardPage";
import FavPage from "./pages/FavPage/FavPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
    },
    {
      path: "/card/:id",
      element: <CardPage />,
    },
    {
      path: "/favorite",
      element: <FavPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
  ]);