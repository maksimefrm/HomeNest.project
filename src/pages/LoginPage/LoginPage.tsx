import LoginTypes from "../../copmponents/LoginTypes/LoginTypes";
import { Heading, LoginInputs } from "../../copmponents/UI";
import { SCLoginPage } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <div>
    <SCLoginPage className="container">
      <Heading variant={"h1"} text={"Авторизация"} />
      <LoginInputs />
      <LoginTypes
        navigatePath="/registration"
        linkText={"Зарегистрироваться"}
        hasAccountText={"У вас нет аккаунта?"}
        authWithText={"Войти с помощью:"}
      />
    </SCLoginPage>
    </div>
  );
};
