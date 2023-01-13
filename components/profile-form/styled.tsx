import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 14px;
  width: 100%;

  button {
    color: var(--black);
    background-color: var(--secondary);
    margin-top: 20px;
  }

  .err {
    text-align: left;
  }
`;
