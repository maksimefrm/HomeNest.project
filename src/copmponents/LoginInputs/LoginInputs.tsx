import { Button, Input } from "../UI";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

interface ILoginInputs {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup
      .string()
      .email("Введите почту в правильном формате")
      .required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(8, "Минимум 8 символов")
      .max(16, "Максимально 16 символов"),
  })
  .required();


const LoginInputs = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    }
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPassword", data.password);
    navigate("/main");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              type={"text"}
              placeholder={"Ваша почта"}
              isError={errors.email ? true : false}
              errorMessage={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              type={"password"}
              placeholder={"Ваш пароль"}
              isError={errors.password ? true : false}
              errorMessage={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button text={"Войти"} type={"submit"} />
      </div>
    </form>
  );
};

export default LoginInputs
