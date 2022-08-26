import React from "react";
import S from "./styles";
import { FormikProps } from "formik";
import { IFormPlayer } from "../../interfaces/player";

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
    <S.FormWrapper>
      <S.RowInput>
        <S.Input htmlFor="name">
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

      <S.Input htmlFor="age">
        Idade:
        <input
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
        />
      </S.Input>

      <S.Input htmlFor="isInjured">
        Lesionado?
        <input
          type="checkbox"
          id="isInjured"
          name="isInjured"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
      </S.Input>
    </S.FormWrapper>
  );
};

export default Form;
