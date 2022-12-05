import styled from "styled-components";

export const ContainerCard = styled.div`
  border: 4px solid;
  border-radius: var(--border-radius);
  width: 328px;
  height: 322px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const CardImg = styled.div`
  height: 70%;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
`

export const CardContent = styled.div`
  background-color: var(--pink);
  width: 100%;
  height: 30%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
