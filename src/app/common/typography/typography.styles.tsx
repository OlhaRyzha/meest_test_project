import styled, { css } from "styled-components"

enum FontSizes {
  small = '1.2rem',
  normal = '1.4rem',
  medium = '1.6rem',
  medimPlus = '1.8rem',
  mediumBig = '2.4rem',
  big = '2.8rem',
}

enum Colors {
  blue = '#005FAD', // btn background
  blue2 = '#0070CC', // tab bottom border
  blue3 = '#0061AF', // links
  blue4 = '#008CFF', // checbox checked,
  blueLight3 = '#B3DDFF',
  blueLight4 = '#F4F7FC',
  blueDisabled = '#C1DBF0', // disabled button
  gray = '#5A6673', // normal text
  gray2 = '#75777B', // tab title, checkbox unchecked border
  gray3 = '#96999E', // nav text, nav btn active
  gray4 = '#B7B9BD', // nav btn hover
  gray5 = '#B7B9BD', // Parcle step title inactive
  grayLight = '#7B8085', // label text, checkbox descr. text
  grayLight2 = '#96999E', // nav icons
  grayLight3 = '#DCDDE0', // input borders
  grayLight4 = '#E0E3E7', // placeholder text
  grayLight5 = '#EAECEE', // password validation marker background
  grayLight6 = '#F5F6F7', // nav background
  grayDark = '#334150', // headings
  grayDark2 = '#2C363F', // text in inputs, sidebar title, footer header3
  grayDark3 = '#2C2C2C', // text copyright
  grayDark4 = '#3C3C434D',
  white = '#FFFFFF',
  red = '#ED5576',
  redTransparent = '#ed5576e2',
  lightRed = '#FE6975',
  green = '#57C278',
  greenTransparent = '#68c886e3',
  yellow = '#FFCB45'
}

const HeaderMain = styled.h1`
  font-size: ${FontSizes.big};
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 1px;
  color: ${Colors.grayDark};
`;

const HeaderSecondary = styled.h2`
  font-size: ${FontSizes.medimPlus};
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: .5px;
  color: ${Colors.grayDark2}
`;

interface Header3Props {
  color?: 'faded';
}

const HeaderTertiary = styled.h3<Header3Props>`
  font-size: ${FontSizes.normal};
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: .5px;
  color: ${({ color }) => color ? Colors.gray2 : Colors.grayDark2}
`;

const HeaderFourth = styled.h3<Header3Props>`
  font-size: ${FontSizes.mediumBig};
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: .5px;
  color: ${({ color }) => color ? Colors.gray2 : Colors.grayDark2}
`;

const TextBody = styled.p`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem;
  color: ${Colors.gray}
`;

const TextLabel = styled.label`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem;
  color: ${Colors.grayLight};
`

const TextInput = css`
  font-size: ${FontSizes.medium};
  font-weight: 500;
  line-height: 2.4rem;
  color: ${Colors.grayDark2};
`

const TextButton = css`
  font-size: ${FontSizes.medium};
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: .5px;
  color: ${Colors.white};
`

const TextButtonThin = css`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: .5px;
  color: ${Colors.white};
`

const TextInputPlaceholder = css`
  font-size: ${FontSizes.medium};
  font-weight: 500;
  line-height: 2.4rem;
  color: ${Colors.grayLight4};
`

const TextCheckbox = styled.span`
  font-size: ${FontSizes.small};
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: .5px;
  color: ${Colors.gray2};
`

const TextValidation = css`
  font-size: ${FontSizes.small};
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: .5px;
  color: ${Colors.grayLight};
`

const TextFormError = styled.span`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem;
  color: ${Colors.red};
`

const TextSearchOption = styled.span`
  font-size: ${FontSizes.medium};
  font-weight: 400;
  line-height: 2.4rem;
  color: ${Colors.grayDark2};
`

interface CaptionProps {
  color?: 'red' | 'green';
}

const TextPopup = styled.span<CaptionProps>`
  font-size: ${FontSizes.small};
  font-weight: 500;
  line-height: 1.6rem;
  color:  ${({ color }) => !color ? Colors.grayDark2 : color === 'green' ? Colors.green : Colors.red};
`

interface TextMenuProps {
  color: 'normal' | 'active' | 'nav';
}

const TextMenu = styled.span<TextMenuProps>`
  font-size: ${FontSizes.small};
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: .5px;
  color: ${({color}) => 
      color === 'nav' ? Colors.gray2
    : color === 'active' ? Colors.blue
    : Colors.grayDark2}
`

const TextNavMenu = styled.span`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem; /* 142.857% */
  letter-spacing: 0.5px;
  color: ${Colors.gray2};
`

interface TextServicesMenuProps {
  color?: 'gray' | 'red';
}

const TextServicesMenu = styled.span<TextServicesMenuProps>`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem; /* 142.857% */
  letter-spacing: 0.5px;
  color: ${({color}) => color && color === 'red' ? Colors.red : Colors.grayDark2};
  white-space: nowrap;
`

interface TextServicesDataProps {
  type: 'label' | 'data';
}

const TextServicesData = styled.span<TextServicesDataProps>`
  ${({type}) => type === 'label' ? css`font-size: ${FontSizes.normal};` : css`font-size: ${FontSizes.medimPlus};`}
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.5px;
  
  ${({type}) => type === 'label' ? css`color: ${Colors.gray2};` : css`color: ${Colors.grayDark2};`}
`

const TextServicesContact = styled.span`
  font-size: ${FontSizes.small};
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.5px;
  color: ${Colors.gray2};
  display: block;
`

const TextCopyright = styled.span`
  font-size: ${FontSizes.small};
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: .5px;
  color: ${Colors.grayDark3};
`

const TextToastMessage = css`
  font-size: ${FontSizes.medium};
  font-weight: 300;
  color: ${Colors.grayLight6};
  line-height: 2rem;
`

const TextToastErrorMessage = css`
  font-size: ${FontSizes.normal};
  font-weight: 300;
  color: ${Colors.grayLight6};
  line-height: 2rem;
`

interface LinkProps {
  bold?: boolean;
}

const Link = styled.a<LinkProps>`
  &:link,
  &:visited {
    font-size: ${FontSizes.normal};
    ${({ bold }) => bold
    ? css`font-weight: 600;`
    : css`font-weight: 500;`
  }
    line-height: 2rem;
    letter-spacing: .5px;
    color: ${Colors.blue3};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all .2s;
  }

  &:hover,
  &:active {
    border-bottom: 1px solid ${Colors.blue3};
  }
`

const LinkSmall = styled.a`
  &:link,
  &:visited {
    font-size: ${FontSizes.small};
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: .5px;
    color: ${Colors.blue3};
    text-decoration: none;
    border-bottom: 1px solid ${Colors.blue3};
    transition: all .2s;
  }

  &:hover,
  &:active {
    border-bottom: 1px solid transparent;
  }
`

const LinkFooter = styled.a`
  &:link,
  &:visited {
    font-size: ${FontSizes.normal};
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: .5px;
    color: ${Colors.grayDark3};
    text-decoration: none;
    /* border-bottom: 1px solid transparent;
    transition: all .2s; */
  }
  
  &:hover,
  &:active {
    /* border-bottom: 1px solid ${Colors.grayDark3}; */
  }
`

export {
  HeaderMain,
  HeaderSecondary,
  HeaderTertiary,
  HeaderFourth,
  TextBody,
  TextLabel,
  TextCheckbox,
  TextInput,
  TextInputPlaceholder,
  TextFormError,
  TextValidation,
  TextPopup,
  TextButton,
  TextButtonThin,
  TextMenu,
  TextNavMenu,
  TextServicesMenu,
  TextServicesContact,
  TextServicesData,
  TextCopyright,
  TextSearchOption,
  TextToastMessage,
  TextToastErrorMessage,
  Link,
  LinkSmall,
  LinkFooter,
  FontSizes,
  Colors
};

