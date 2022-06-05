import styled from "styled-components";
import { color, screenSize } from '../../../styles';

const SearchStyling = styled.div`
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Montserrat';
`;
const H2 = styled.h2`
  font-size: 1.5rem;
`;

const ImageGridStyling = styled.div`
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
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