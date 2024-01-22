import { useState } from "react";
import { HeaderSecondary } from "../../../common/typography/typography.styles";
import { useStore } from "../../../stores/store";
import {
  FormTextComponent,
  ServiceEditButton,
  ServicesSubSectionContainer,
  UserInfoContainer,
  UserInfoText,
} from "./services-subsection.styles";
import YourForm from "../services-contact-form/services-contact-form.component";

interface Props {
  title: string;
}

const ServicesSubsection = ({ title }: Props) => {
  const {
    userStore: { user },
  } = useStore();

  const [editingMode, setEditingMode] = useState(false);

  const handleEditClick = () => {
    setEditingMode(true);
  };

  const handleFormSubmit = () => {
    setEditingMode(false);
  };

  return (
    <ServicesSubSectionContainer>
      <HeaderSecondary>{title}</HeaderSecondary>

      {editingMode ? (
        <YourForm onUpdateStatus={setEditingMode} onFormSubmit={handleFormSubmit} />
      ) : (
        <UserInfoContainer>
          <UserInfoText>
            Email: <FormTextComponent>{user?.email}</FormTextComponent>
          </UserInfoText>
          <UserInfoText>
            Phone:{" "}
            <FormTextComponent>
              {user?.phone?.phone_number && `+${user?.phone?.phone_number}`}
            </FormTextComponent>
            <p>dfkzjmhgkf;lxjhn;ockm'p</p>
          </UserInfoText>
          <ServiceEditButton onClick={handleEditClick}>Edit</ServiceEditButton>
        </UserInfoContainer>
      )}
    </ServicesSubSectionContainer>
  );
};

export default ServicesSubsection;
