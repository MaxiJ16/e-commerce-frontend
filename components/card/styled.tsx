import styled from "styled-components";

export const ContainerCard = styled.div`
  /* border: 1px solid var(--primary); */
  background-color: var(--white);
  border-radius: 10px;
  width: 270px;
  
  display: flex;
  flex-direction: column;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  padding: 10px 20px;
  text-align: center;

  :hover {
    box-shadow: 0px 0px 25px var(--primary);
    border: 2px solid var(--primary);
  }
`;

export const CardImg = styled.div`
  height: 70%;
  width: 100%;
`;

export const Img = styled.img`
  height: 220px;
  width: 200px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center bottom;
  position: relative;
  top: -40px;
`;

export const CardContent = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;

  h2 {
    font-size: 22px;
    margin: 0;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary);
  }
`;
