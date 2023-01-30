import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../button/Button";
import "./form.css";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div  className="form-container">
          <div className="input-container">
            <input
              type="text"
              placeholder="NAME"
              className="input-text"
              {...register("name", { required: true, maxLength: 50 })}
            />
            {errors.name?.type === "required" && (
              <p className="error">Sorry, the input should not be empty</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="error">The field must have a maximum of 50 characters</p>
            )}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="EMAIL"
              className="input-text"
              {...register("email", {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <p className="error">Sorry, invalid format here</p>
            )}
          </div>
          <div className="input-textarea-container">
            <input
              type="text"
              placeholder="MESSAGE"
              className="input-textarea"
              {...register("message", { required: true })}
            />
          </div>
          <Button label="SEND MESSAGE"/>
        </div>
      </form>
    </div>
  );
};