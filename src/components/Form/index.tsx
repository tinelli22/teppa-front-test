import React, { useState } from "react";
import S from "./styles";
import { FormikProps } from "formik";
import { IFormPlayer } from "../../interfaces/player";
import classNames from "classnames";

const Form = (props: FormikProps<IFormPlayer>) => {
  const [previewImage, setPreviewImage] = useState<string>("");

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  const onChangeImage = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = URL.createObjectURL(ev.target.files![0]);
    if (file) setPreviewImage(file);
    values.image = ev.target.files![0];
    return ev;
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.RowInput>
        {!!previewImage.length && <img className="image" src={previewImage} />}
        <S.Input
          htmlFor="image"
          className={classNames({
            error: !!errors.image,
          })}
        >
          {!previewImage.length && "Selecione uma imagem:"}
          <input type="file" id="image" name="image" onChange={onChangeImage} />
        </S.Input>
        {errors.image && touched.image && (
          <S.ErrorMessage>{errors.image}</S.ErrorMessage>
        )}
      </S.RowInput>

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
          // disabled={!previewImage.length && Object.values(values).length > 0}
          // className={classNames({
          //   disabled: !previewImage.length && Object.values(values).length > 0,
          // })}
        >
          Salvar
        </S.ButtonSubmit>
      </S.RowInput>
    </S.FormWrapper>
  );
};

export default Form;
