import styled from "styled-components";
import { ProfileForm } from "components/profile-form";
import { Title } from "ui/text";

const SectionProfile = styled.section`
  width: 100%;
  height: calc(100vh - 410px);
  display: grid;
  gap: 30px;
  padding: 40px 25px 85px;

  @media(min-width: 769px){
    width: 500px;
    height: calc(100vh - 370px);
    margin: 0 auto;
    padding-top: 100px;

    h1 {
      text-align: center;
    }
  }

`;

export const ProfilePage = () => {
  return (
    <SectionProfile>
      <Title>Perfil</Title>
      <ProfileForm />
    </SectionProfile>
  );
};
