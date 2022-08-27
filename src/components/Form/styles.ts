import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
`

const Input = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    
    input[type=text],
    input[type=number] {
        border: 1px solid #d7d7d7;
        border-radius: 4px;
        height: 32px;
        width: 100%;
    }

    input[type=checkbox] {
        margin: auto 0;
    }

    &.error {
        input[type=text],
        input[type=number] {
        border: 1px solid red;
        }
    }

    &.age {
        input[type=text],
        input[type=number] {
            min-width: 40px;
            max-width: 60px;
        }
    }


`

const RowInput = styled.div`
    display: flex;
    flex-direction: column;

    .image {
       
        max-width: 120px;
        max-height: 120px;
    }
`

const ErrorMessage = styled.span`
    color: red;
    font-size: 0.75rem;
    font-weight: 900;
    padding: 0.5rem 0 0;
`

const ButtonSubmit = styled.button`
    display: flex;
    justify-content: center;
    background: #6200ee;
    font-size: 0.875rem;
    color: #fff;
    height: 32px;
    border-radius: 4px;
    padding: 0.5rem;
    width: 120px;
    margin: 0 0 0 auto;

    &.disabled {
        opacity: 0.5;
        background: #d9d9d9;
    }
`

export default {
    FormWrapper,
    Input,
    RowInput,
    ErrorMessage,
    ButtonSubmit
}