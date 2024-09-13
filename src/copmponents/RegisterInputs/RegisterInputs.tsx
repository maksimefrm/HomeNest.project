import { Button, Input } from "../UI";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IRegisterInputs {
  email: string;
  password: string;
  name: string;
  city: string;
}
const schema = yup
  .object({
    name: yup
    .string()
    .required("Обязательное поле"),
    email: yup
      .string()
      .email("Введите почту в правильном формате")
      .required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(8, "Минимум 8 символов")
      .max(16, "Максимально 16 символов"),
    city: yup
      .string()
      .required("Обязательное поле"),
  })
  .required();

const RegisterInputs = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      city: "",
    }
  });
  const onSubmit: SubmitHandler<IRegisterInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
      <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              type={"text"}
              placeholder={"Ваше имя"}
              isError={errors.name ? true : false}
              errorMessage={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <Input
              type={"text"}
              placeholder={"Ваш город"}
              isError={errors.name ? true : false}
              errorMessage={errors.name?.message}
              {...field}
            />
          )}
        />
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
        <Button text={"Зарегистрироваться"} type={"submit"} />
      </div>
    </form>
  );
};

export default RegisterInputs;
