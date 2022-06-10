import styled from 'styled-components';
import { borderRadius, color } from '../../../styles';

const SignInStyling = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  .formText {
    p {
      a {
        color: ${color.orange};
      }
    }
 }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem 1rem;

 span, input {
  width: 100%;
 }
 button {
  background: ${color.orange};
  border: 1px solid ${color.orange};
  width: 100%;
 }

 .back-to-homepage {
    display: flex;
    align-items: center;
    align-self: flex-start;

    a {
      margin-left: 0.5rem;
    }
  }

  .p-inputtextarea {
    width: 100%;
  }
`;

export { SignInStyling, Form };