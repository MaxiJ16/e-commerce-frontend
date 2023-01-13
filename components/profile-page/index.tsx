import { ProfileForm } from "components/profile-form";
import { Title } from "ui/text";
import { SectionProfile } from "./styled";

export const ProfilePage = () => {
  return (
    <SectionProfile>
      <Title>Perfil</Title>
      <ProfileForm />
    </SectionProfile>
  );
};
