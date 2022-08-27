import styled from "styled-components";
import { borderRadius, color, screenSize } from '../../../styles';

const SearchStyling = styled.div`
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 0 auto;

  .all-users {
    a {
      margin-left: 1rem;
      font-size: 1.25rem;
      display: inline-flex;
      flex-flow: row wrap;
      align-items: center;
      margin-right: 3rem;
      margin-bottom: 3rem;
      padding: 0.5rem 2rem;
      border-radius: ${borderRadius.standardRadius};
      border: 1px solid lightgray;

      p {
        margin-left: 0.5rem;
      }

      

    @media (min-width: ${screenSize.desktopSize}) {
      margin-left: 0;
    }
    }
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Montserrat';
  margin-left: 1rem;
  margin-bottom: 3rem;
  @media (min-width: ${screenSize.desktopSize}) {
    margin-left: 0;
  }
`;
const H2 = styled.h2`
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media (min-width: ${screenSize.desktopSize}) {
    margin-left: 0;
  }
`;


const ImageGridStyling = styled.div`
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 1rem 0;

  @media (min-width: ${screenSize.tabletSize}) {
    gap: 1rem;
  }
  @media (min-width: ${screenSize.desktopSize}) {
    padding: 0;
  }

  a {
    height: 300px;
    position: relative;
  }
`;

export { SearchStyling, H1, H2, ImageGridStyling }