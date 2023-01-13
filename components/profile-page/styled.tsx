import styled from "styled-components";

export const SectionProfile = styled.section`
  width: 100%;
  display: grid;
  gap: 20px;
  padding: 40px 25px 80px;

  h1 {
    font-size: 30px;
    color: #535252;
  }

  @media (min-width: 769px) {
    min-height: 65.5vh;
    gap: 70px;
    width: 600px;
    margin: 0 auto;
    display: grid;
    place-items: center;

    h1 {
      text-align: center;
      font-size: 40px;
    }
  }
`;
