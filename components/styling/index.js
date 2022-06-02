import styled from "styled-components";
import { animationSpeed, borderColor, color, screenSize } from "../../styles";

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


const Hamburger = styled.div`
  .menu-btn {
    position: relative;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: all ${animationSpeed} ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.menu-btn__burger {
  width: 2rem;
  height: 5px;
  background-color: ${borderColor};
  border-radius: 5px;
  transition: all ${animationSpeed} ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 2rem;
  height: 5px;
  background-color: ${borderColor};
  border-radius: 5px;
  transition: all ${animationSpeed} ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-0.7rem);
}
.menu-btn__burger::after {
  transform: translateY(0.7rem);
}
/* animation */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  background-color: white;
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  background-color: white;
}
`;

// HEADER

const HeaderStyle = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  .showMenu {
    right: 0;
    transition: .2s;
  }
  nav {
    background: ${color.black};
    position: fixed;
    width: 100%;
    top: 0;
    right: -100%;
    height: 100vh;
    transition: .2s;
    z-index: 999;

    @media (min-width: ${screenSize.desktopSize}) {
      width: 35%;
    }
    ul {
      list-style: none;
      width: 100%;
      padding: 0 1rem;
      li {
        background: ${color.green};
        margin: 1rem 0;
        text-align: center;
        width: 100%;
        border-radius: 3px;
        :nth-child(1) {
          background: transparent;
          display: flex;
          justify-content: right;
          padding-right: 1rem;
        }
        a {
          color: ${color.white};
          font-size: 1.25rem;
          font-weight: bold;
          padding: 1rem;
          width: 100%;
          display: inline-block;
          text-decoration: none;
        }
      }
    }
    button {
      color: #fff;
      background: red;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 1.25rem;
      font-weight: bold;
      margin-top: 2rem;
      padding: 1rem;
      width: 100%;
      display: inline-block;
      text-decoration: none;
    }
  }
`;

export { FooterStyling, StyledLi, FooterHeadingTitleStyle, SocialsUlStyling, FooterLinksUl, FooterContactsUl, HeaderStyle, Hamburger }