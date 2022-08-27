import React, { useState } from "react";
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
  const { image } = values

  const [previewImage, setPreviewImage] = useState<Blob | undefined>(image);


  const onChangeImage = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const val = ev.target.files![0];
    setPreviewImage(val);

    values.image = val;
    return ev;
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.RowInput>
        {previewImage && <img className="image" src={URL.createObjectURL(previewImage)} />}
        <S.Input
          htmlFor="image"
          className={classNames({
            error: !!errors.image,
          })}
        >
          {!previewImage && "Selecione uma imagem:"}
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
