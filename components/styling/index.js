import styled from "styled-components";
import { color, screenSize } from "../../styles";

const FooterStyling = styled.footer`
  background: ${color.black};
  padding: 0 1rem;
  padding-bottom: 2rem;
  margin-top: 5rem;

 

  .footer-width {
    width: 100%;
    max-width: ${screenSize.desktopSize};
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .headerwrap {
    display: flex;
    flex-direction: column;
    flex: 1 1 25%;

    p {
      color: ${color.white}
    }
  }
  }


  @media (min-width: ${screenSize.desktopSize}) {

    .footer-width {
      max-width: ${screenSize.desktopSize};
      display: flex;
      flex-direction: row;
      justify-content: space-between;

    }
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;

  .spanwrap {
    margin-left: 0.5rem;

    display: flex;
    flex-direction: column;
  }
`;

const FooterHeadingTitleStyle = styled.h4`
  color: ${color.orange};
  font-family: 'Montserrat';
  font-size: 1.25rem;
  margin: 2rem 0 0.5rem 0;
`;

const SocialsUlStyling = styled.ul`
  display: flex;
  flex: 1 1 25%;

  li {
    margin-right: 0.5rem;
  }
`;

const FooterLinksUl = styled.ul`
  flex: 1 1 25%;
    li {
      color: white;
    }
`;

const FooterContactsUl = styled.ul`
  flex: 1 1 25%;
    li {
      color: white;
    }
`;

export { FooterStyling, StyledLi, FooterHeadingTitleStyle, SocialsUlStyling, FooterLinksUl, FooterContactsUl }