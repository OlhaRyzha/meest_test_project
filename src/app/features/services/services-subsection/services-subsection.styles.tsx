import styled from "styled-components";
import {
  Colors,
  FontSizes,
  HeaderSecondary,
  TextBody,
  TextServicesData,
} from "../../../common/typography/typography.styles";
import { SidebarHeader } from "../../../common/sidebar-right/sidebar.styles";

export const ServicesSubSectionContainer = styled.div`
  position: relative;
  padding: 2.4rem;
  background-color: ${Colors.white};
  border-radius: 1.2rem;
  border: 1px solid ${Colors.grayLight5};
  width: 73%;
  height: fit-content;

  ${HeaderSecondary} {
    margin-bottom: 2.4rem;
  }

  ${SidebarHeader} > ${HeaderSecondary} {
    margin-bottom: 0;
  }

  @media (max-width: 650px) {
    min-width: auto;
    width: 100%;
  }
`;

export const SubSectionDataItem = styled.span`
  display: flex;
  justify-content: left;
  gap: 5rem;
  align-items: center;

  & > ${TextServicesData}:first-child {
    width: 15rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: start;
  }
`;

export const ServiceEditButton = styled.span`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  font-size: ${FontSizes.medium};
  font-weight: 500;
  color: ${Colors.blue2};
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${Colors.blue2};
  }
`;

export const UserInfoContainer = styled.div`
  margin-bottom: 1.25rem;
`;

export const UserInfoText = styled(TextBody)`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const FormTextComponent = styled.b`
  margin-left: 5.4rem;
  color: ${Colors.grayDark};
`;
