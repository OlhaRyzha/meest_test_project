import { HeaderFourth, TextBody } from "../../common/typography/typography.styles";
import Button from "../button/button.component";
import { useNavigate } from 'react-router-dom';
import { StatusPageBackground, StatusPageButtonsContainer, StatusPageCenteredContent, StatusPageContainer } from "./status-page.styles";
import { useEffect } from "react";

interface Props {
  title: string;
  bodyText: string;
  Image: React.FC<React.SVGProps<SVGSVGElement>>;
  showSupportButton?: boolean;
}

const StatusPage = ({title, bodyText, Image, showSupportButton}: Props) => {

  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <StatusPageContainer>
      <StatusPageBackground>
        <StatusPageCenteredContent>
          <Image />
          <HeaderFourth>{title}</HeaderFourth>
          <TextBody>{bodyText}</TextBody>
          <StatusPageButtonsContainer>
            <Button onClick={() => navigate(-1)}>&larr; Back</Button>
            {showSupportButton && <Button>Support</Button>}
          </StatusPageButtonsContainer>
        </StatusPageCenteredContent>
      </StatusPageBackground>
    </StatusPageContainer>
  )
}

export default StatusPage;