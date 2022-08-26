import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
`

const Input = styled.label`
    display: flex;
    gap: 0.5rem;
    
    input[type=text],
    input[type=number] {
        border: 1px solid #d7d7d7;
        border-radius: 4px;
        height: 32px;
    }
`

const RowInput = styled.div`
    display: flex;
    flex-direction: column;
`

const ErrorMessage = styled.span`
    color: red;
`

export default {
    FormWrapper,
    Input,
    RowInput,
    ErrorMessage
}