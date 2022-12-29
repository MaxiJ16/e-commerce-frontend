import styled from "styled-components";
import { ProfileForm } from "components/profile-form";
import { Title } from "ui/text";

const SectionProfile = styled.section`
  width: 100%;
  height: calc(100vh - 370px);
  display: grid;
  gap: 30px;
  padding: 40px 25px 85px;

  h1 {
    font-size: 30px;
    color: #535252;
  }

  @media (min-width: 769px) {
    width: 500px;
    height: calc(100vh - 323px);
    margin: 0 auto;
    padding-top: 80px;
    gap: 0px;
    h1 {
      text-align: center;
      font-size: 40px;
      margin-bottom: -30px;
    }

    button {
      height: 60px;
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
