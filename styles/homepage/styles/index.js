import styled from 'styled-components';
import { borderRadius, boxShadow, color, screenSize } from '../../../styles';

const BannerStyling = styled.div`
  background-repeat: no-repeat;
  background-image: url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170');
  background-size: 100% 100%;
  width: 100%;
  height: 300px;
  padding: 0rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center ;

  .banner__btn-wrap {
      display: flex;
      flex-direction: column;

      @media (min-width: ${screenSize.desktopSize}) {
        gap: 0 2rem;
        flex-direction: row;
      }
    a {
      margin-bottom: 1rem;
    }
  }
 

  @media (min-width: ${screenSize.tabletSize}) {
    background-size: cover;
    background-position: center;
  }

  @media (min-width: ${screenSize.desktopSize}) {
    align-items: center;
  }
`;

const H1 = styled.h1`
  color: ${color.white};
  font-size: 2.5rem;
  font-family: 'Montserrat';
  margin: 0 0 1rem 0;
  @media (min-width: ${screenSize.desktopSize}) {
    font-size: 3.1rem;
  }
`;

const P = styled.p`
  color: ${color.white};
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (min-width: ${screenSize.desktopSize}) {
    font-size: 1.25rem;
    max-width: 50%;
    text-align: center;
  }
`;

const H2 = styled.h2`
  font-family: 'Montserrat';
  font-size: 2.1rem;
  margin: 2rem 1rem;

  @media (min-width: ${screenSize.tabletSize}) {
    text-align: center;
  }
  @media (min-width: ${screenSize.desktopSize}) {
    font-size: 2.5rem;
    text-align: center;
    margin: 4rem 0;
  }
`;

const StyledCards = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${screenSize.desktopSize};

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 2rem 0;

  @media (min-width: ${screenSize.desktopSize}) {
    padding: 0;
  }
`;


const StyledCard = styled.div`
  padding: 1rem;
  border-radius: ${borderRadius.standardRadius};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${boxShadow.cards};

  h4 {
    color: ${color.darkGrey};
    font-size: 1.25rem;
    margin: 1rem 0;
    text-align: center;
  }
  p {
    color: ${color.darkGrey};
    font-size: 1.125rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (min-width: ${screenSize.tabletSize}) {
    max-width: 250px;
    p {
      font-size: 1.25rem;
    }
  }
`;

export { BannerStyling, H1, P, H2, StyledCards, StyledCard }