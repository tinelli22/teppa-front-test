import React from "react";
import S from "./styles";
import { FormikProps } from "formik";
import { IFormPlayer } from "../../interfaces/player";
import classNames from "classnames";

const Form = (props: FormikProps<IFormPlayer>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  console.log(props);

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.RowInput>
        <S.Input
          htmlFor="name"
          className={classNames({
            error: !!errors.name,
          })}
        >
          Nome:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </S.Input>
        {errors.name && touched.name && (
          <S.ErrorMessage>{errors.name}</S.ErrorMessage>
        )}
      </S.RowInput>

      <S.RowInput>
        <S.Input
          htmlFor="age"
          className={classNames({
            error: !!errors.age,
            age: true,
          })}
        >
          Idade:
          <input
            type="number"
            id="age"
            name="age"
            min={16}
            max={99}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
        </S.Input>
        {errors.age && touched.age && (
          <S.ErrorMessage>{errors.age}</S.ErrorMessage>
        )}
      </S.RowInput>

      <S.RowInput>
        <S.Input
          htmlFor="isInjured"
          className={classNames({
            error: !!errors.isInjured,
          })}
        >
          Lesionado?
          <input
            type="checkbox"
            id="isInjured"
            name="isInjured"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.isInjured}
          />
        </S.Input>
        {errors.isInjured && touched.isInjured && (
          <S.ErrorMessage>{errors.isInjured}</S.ErrorMessage>
        )}
      </S.RowInput>
      <S.RowInput>
        <S.ButtonSubmit
          type="submit"
         className={classNames({
          disabled: !!errors || isSubmitting,
        })}
        >Salvar</S.ButtonSubmit>
      </S.RowInput>
    </S.FormWrapper>
  );
};

export default Form;
