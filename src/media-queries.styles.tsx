import { css } from "styled-components";
import { AuthContainer } from "./app/routes/authorization/authorization.styles";
import { Colors, HeaderSecondary } from "./app/common/typography/typography.styles";
import { NavigationContainer } from "./app/features/navigation/navigation.styles";
import { PasswordValidatorContainer } from "./app/common/password-validator/password-validator.styles";
import { SidebarContainer } from "./app/common/sidebar-right/sidebar.styles";
import { FooterBottomContainer, FooterContainer, FooterTopContainer } from "./app/features/footer/footer.styles";
import { NavLangButton } from "./app/features/navigation/nav-lang/nav-lang.styles";
import { SignInNavButton } from "./app/features/navigation/nav-signin-btn/nav-signin.styles";
import { ServicesContainer, ServicesNavContainer, ServicesNavMobileContainer } from "./app/features/navigation/nav-services/nav-services.styles";
import { HelpNavButton } from "./app/features/navigation/nav-help/nav-help.styles";
import { NavBtn } from "./app/features/navigation/nav-btn/nav-btn.styles";
import { UserNavBtn, UserNavContainer, UserNavMobileContainer } from "./app/features/navigation/nav-user/nav-user.styles";
import { ServicesSubSectionContainer, SubSectionDataItem } from "./app/features/services/services-subsection/services-subsection.styles";
import { ServicePageContainer } from "./app/features/services/services-page-container/services-page-container.styles";
import { ServicesRouteContainer, ServicesRouteMobile } from "./app/routes/services/services.styles";
import { StatusPageButtonsContainer, StatusPageCenteredContent } from "./app/common/status-page/status-page.styles";

export const MediaQueries = css`

  #parcelProgressMobile {
    display: none;
  }
  
  @media (max-height: 1024px) {
    ${ServicesContainer} {
      height: 80rem;
    }
  }

  @media (max-height: 800px) {
    ${ServicesContainer} {
      height: 70rem;
    }
  }

  @media (max-height: 720px) {
    ${SidebarContainer} {
      overflow: scroll;
    }
  }

  @media (max-width: 900px) {

    ${FooterContainer} {
      padding-bottom: 1.6rem;
      bottom: -48rem;
    }

    ${FooterBottomContainer} {
      grid-template-columns: 1fr;
      justify-items: center;
      row-gap: 1.6rem;
    }
  }

  @media (max-width: 750px) {
    ${SubSectionDataItem} {
      flex-direction: column;
      gap: .8rem;
      align-items: start;
    }

    ${ServicesSubSectionContainer} {
      form {
        .inputs {
          flex-direction: column;
          gap: 0;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
          width: 100%;
          margin: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 1rem;
    }

    .Toastify__toast-container--top-center {
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }


  @media (max-width: 650px) {
    ${AuthContainer} {
      padding: 5rem;
      margin-top: 0;
      border-radius: 0;
    }

    ${SidebarContainer} {
      width: 100%;

      ${HeaderSecondary} {
        padding-left: 2.4rem;
        margin-bottom: 0;
      }
    }

    ${UserNavContainer} {
      display: none;
    }

    ${UserNavMobileContainer} {
      display: flex;
    }

    ${FooterContainer} {
      margin-top: 0;
    }

    ${FooterTopContainer} {
      padding-top: 1.6rem;
    }

    ${NavLangButton}, ${UserNavBtn} {
      & > *:not(:first-child) {
        display: none;
      }
    }

    ${ServicesNavContainer}, ${ServicesRouteContainer} {
      display: none;
    }

    ${ServicesNavMobileContainer}, ${ServicesRouteMobile} {
      display: flex;
    }
    
    ${SignInNavButton} {
      & > ${NavBtn}:nth-child(2) {
        display: flex;
      }

      & > *:not(:nth-child(2)) {
        display: none;
      }
    }

    ${HelpNavButton} {
      display: none;
    }

    ${FooterTopContainer} {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    ${NavigationContainer} {
      background-color: ${Colors.white};
    }

    ${ServicePageContainer} {
      margin: 0 auto;
      /* padding: 1.6rem; */
    }

    ${ServicesSubSectionContainer}:nth-child(3) {
      form .inputs {
        div:nth-child(1), div:nth-child(2), div:nth-child(3), div:nth-child(4), div:nth-child(5), div:nth-child(6), div:nth-child(7), div:nth-child(8) {
          grid-column: 1 / span 6 !important;
        }

        margin-bottom: 2rem;
     }
    }

    ${StatusPageCenteredContent} {
      svg {
        width: 35rem;
      }

      ${StatusPageButtonsContainer} {
        padding: 0 3rem;
      }
    }

    #parcelProgressMobile {
      display: flex;
    }
  }

  @media (max-width: 550px) {
    ${PasswordValidatorContainer} {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }
  }

  @media (max-width: 490px) {
    ${AuthContainer} {
      padding: 2.4rem 3rem;
    }
  }

  @media (max-width: 400px) {       
    ${AuthContainer} {
      padding: 2.4rem 1.6rem;
    }

    ${StatusPageCenteredContent} {
      svg {
        width: 25rem;
        height: 25rem;
      }

      ${StatusPageButtonsContainer} {
        padding: 0;
      }
    }
  }
`





