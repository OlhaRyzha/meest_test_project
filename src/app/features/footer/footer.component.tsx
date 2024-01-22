import { FooterContainer, FooterContent } from "./footer.styles";
import FooterTop from "./footer-top.component";
import FooterBottom from "./footer-bottom.component";

const Footer = () => {


  return (
    <FooterContainer>
      <FooterContent>
       <FooterTop />
       <FooterBottom /> 
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer;