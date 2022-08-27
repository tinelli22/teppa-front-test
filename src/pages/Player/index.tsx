import { withFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { IFormPlayer } from "../../interfaces/player";
import { saveService } from "../../services/player";
import toBase64, { toBlob } from "../../utils/convertFile";
import validationPlayerSchema from "../../validationSchema/player";
import StylesPlayers from "../Players/styles";


const Player = () => {
  const { state } = useLocation()
  
  const [initialValues, setInitialValues] = useState<IFormPlayer>({
    name: "",
    age: 18,
    isInjured: false,
  });
  
  const setValues = useCallback(async () => {
    if(state) {
      const { image, ...rest } =  state as any
      const resp = await toBlob(image);

      setInitialValues({...rest, image: resp})
    }
    else Navigate({ to: "/"})

  }, [state])

  useEffect(() => {
    setValues()
  }, [setValues])

  

  const MyForm = withFormik({
    mapPropsToValues: () => initialValues,

    handleSubmit: async (values) => {
      if(values.image) {
        const respConvert = await toBase64(values.image) as string
        const resp = await saveService({...values, image: respConvert});
        if(resp) window.location.href = '/'
      }
    },

    validationSchema: validationPlayerSchema,
  })(Form);

  return (
    <>
      <StylesPlayers.Header>
        <StylesPlayers.Title>Novo Jogador</StylesPlayers.Title>
      </StylesPlayers.Header>
      <StylesPlayers.Wrapper>
        <MyForm />
      </StylesPlayers.Wrapper>
    </>
  );
};

export default Player;
