import LoginTypes from "../../copmponents/LoginTypes/LoginTypes";
import RegisterInputs from "../../copmponents/RegisterInputs/RegisterInputs";
import { Heading } from "../../copmponents/UI";
import { SCLoginPage } from "../LoginPage/LoginPage.styled";

export const RegistrationPage = () => {
  return (
    <div>
    <SCLoginPage className="container">
      <Heading variant={"h1"} text={"Регистрация"} />
      <RegisterInputs />
      <LoginTypes
        navigatePath="/"
        linkText={"Войти"}
        hasAccountText={"У вас есть аккаунт?"}
        authWithText={"зарегистрироваться с помощью:"}
      />
    </SCLoginPage>
    </div>
  );
};