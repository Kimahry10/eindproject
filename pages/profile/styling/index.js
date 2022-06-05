import styled from 'styled-components';
import { color, screenSize } from '../../../styles';

const StandardComponentStyling = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerStyling = styled.div`
  background-image: url('https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;

  @media (min-width: ${screenSize.tabletSize}) {
    height: 200px;
  }
`;

const UserInfoAndNavigationStyling = styled.div`
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSize.desktopSize}) {
    flex-direction: row;
  }

  .button-wrap {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    @media (min-width: ${screenSize.desktopSize}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .profileImageUserInfoWrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      text-transform: capitalize;
    }
    h4, p {
      text-align: center;
    }

    @media (min-width: ${screenSize.desktopSize}) {
      flex-direction: row;

      h4, p {
      text-align: left;
      }
    }
  }
`;

const ProfileImageStyling = styled.div`
  background: ${color.black};
  width: 95px;
  height: 95px;
  border-radius: 50%;
  margin: 1rem;
  position: relative;
`;

const StyledButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
`;

const StyledUserComponents = styled.div`
  width: 100%;
  max-width: ${screenSize.desktopSize};
  margin: 3rem auto;
`;

const ImageGridStyling = styled.div`
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

  div {
    height: 300px;
    position: relative;
  }
`;

const UploadImagesStyling = styled.div`
  display: flex;
  flex-direction: column;

  .p-knob {
    margin-bottom: 1rem;
  }
  .p-inputtext {
    margin-bottom: 1rem;
  }
`;

export { StandardComponentStyling, BannerStyling, ProfileImageStyling, UserInfoAndNavigationStyling, StyledButton, StyledUserComponents, ImageGridStyling, UploadImagesStyling }