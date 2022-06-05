import styled from "styled-components";
import { borderRadius, color, screenSize } from "../../../styles";

const FormStyling = styled.form`
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;

  @media (min-width: ${screenSize.desktopSize}) {
    padding: 0;
  }

  button {
    background: ${color.orange};
    color: ${color.white};
    font-size: 1.25rem;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    width: 100%;
    border: none;
    border-radius: ${borderRadius.standardRadius};
    cursor: pointer;

  }
  button:hover {
    background: ${color.orangeHover};
  }
`;

const ImageSize = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  position: relative;
`;

const ImageDetailsText = styled.div`
  margin-top: 2rem;
  width: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin: 1rem 0;
  }
  p {
    margin-bottom: 1rem;
  }

  ul {
    li {
      list-style-type: disc;
      margin-left: 1rem;
    }
  }

  a {
    width: 100%;
    margin-top: 2rem;
  }

  @media (min-width: ${screenSize.desktopSize}) {
    margin-top: 0;
    margin-left: 2rem;
  }
`;


export { FormStyling, ImageSize, ImageDetailsText }