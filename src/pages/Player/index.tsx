import { withFormik } from 'formik';
import React from 'react'
import Form from '../../components/Form';
import { IFormPlayer } from '../../interfaces/player';
import validationPlayerSchema from '../../validationSchema/player';
import StylesPlayers from '../Players/styles'

const Player = () => {

  const initialValues = {
    name: '',
    age: 18,
    isInjured: false,
    image: ''
  } as IFormPlayer

  const MyForm = withFormik({
    mapPropsToValues: () => (initialValues),
  
    // Custom sync validation
    // validate: values => {
    //   const errors = {} as any;
  
    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }
  
    //   return errors;
    // },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },

  validationSchema: validationPlayerSchema

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
  )
}

export default Player