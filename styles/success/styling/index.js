import styled from 'styled-components';
import { screenSize } from '../..';

const SuccessStyling = styled.div`
  height: 65vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.1rem;
    font-family: 'Montserrat';
    text-align: center;
    margin: 1rem 0;

    @media (min-width: ${screenSize.tabletSize}) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1rem;
    text-align: center;

    @media (min-width: ${screenSize.tabletSize}) {
      width: 60%;
    }
    @media (min-width: ${screenSize.desktopSize}) {
      width: 40%;
    }
  }

  a {
    width: 100%;
    margin-top: 1rem;

    @media (min-width: ${screenSize.tabletSize}) {
      width: 250px;
    }
  }

  @media (min-width: ${screenSize.desktopSize}) {
    padding: 0;
  }
`;

export { SuccessStyling }