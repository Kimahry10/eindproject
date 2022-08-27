import styled from 'styled-components';
import { borderRadius, boxShadow, color, screenSize } from '../..';

const ImageDetailStyling = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 0 auto;

  @media (min-width: ${screenSize.desktopSize}) {
    align-items: center;
  }
`;

const ImageSize = styled.div`
  width: 100%;
  max-width: 500px;
  height: 530px;
  position: relative;
`;

const ImageDetailsText = styled.div`
  margin-top: 2rem;
  width: 500px;

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

export { ImageDetailStyling, ImageSize, ImageDetailsText }