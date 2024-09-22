import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { SCProfilePage } from "./ProfilePage.styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../../copmponents/UI/Header/Header";

const ProfilePage = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (isSignedIn && user) {
      // Если пользователь вошел через Clerk, используем данные из Clerk
      setUserData({
        name: user.firstName || "Не указано",
        lastName: user.lastName || "Не указано",
        email: user.primaryEmailAddress?.emailAddress || "Не указан",
      });
    } else {
      // Если пользователь не вошел через Clerk, проверяем Local Storage
      const name = localStorage.getItem("userName") || "Не указано";
      const lastName = localStorage.getItem("userLastName") || "Не указано";
      const email = localStorage.getItem("userEmail") || "Не указан";
      setUserData({
        name,
        lastName,
        email,
      });
    }
  }, [isSignedIn, user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userCity");
  };

  return (
    <SCProfilePage>
      <Header />
      <div className="container">
        <div className="UserDataAll">
          {isSignedIn && (
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "100px",
                    height: "100px",
                  },
                },
              }}
            />
          )}
          <div className="UserData">
            <span className="UserInfo">Имя: {userData.name}</span>
            <span className="UserInfo">Фамилия: {userData.lastName}</span>
            <span className="UserInfo">Email: {userData.email}</span>
          </div>
        </div>
        <button onClick={handleSignOut} className="Logout">
          Выйти из аккаунта
        </button>
      </div>
    </SCProfilePage>
  );
};

export default ProfilePage;
