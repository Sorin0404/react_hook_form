"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  password: string;
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name"));
  console.log(watch("password"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl">React_Hook_Form</h1>
      {/* <label htmlFor="name">ID</label> */}
      <input
        type="text"
        defaultValue={""}
        {...register("name", { required: true })}
      />
      {errors?.name && <span className="text-red-500">필수 입력 사항이다</span>}
      {/* <label htmlFor="password">password</label> */}
      <input type="password" {...register("password", { required: true })} />
      {errors?.password && (
        <span className="text-red-500">This field is required</span>
      )}
      <input type="submit" />
    </form>
  );
};

export default ReactHookForm;
