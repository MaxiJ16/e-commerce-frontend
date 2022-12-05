import styled from "styled-components";

export const BaseButton = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: var(--blue);
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: var(--orange);
`;

export const TertiaryButton = styled(BaseButton)`
  background-color: var(--pink);
`;
