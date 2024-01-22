import { SeparatorContainer, SeparatorLine } from "./separator.styles";

interface Props {
  content?: string;
}

const Separator = ({ content }: Props) => {
  return (
    <SeparatorContainer>
      <SeparatorLine width={!content ? "100%" : undefined} />
      {content && (<>{content}<SeparatorLine /></>)}
    </SeparatorContainer>
  )
}

export default Separator;