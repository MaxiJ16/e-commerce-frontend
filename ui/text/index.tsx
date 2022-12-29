import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
`;

export const SubTitle = styled(Title).attrs({ as: "h2" })`
  font-size: 32px;
  color: ${(props) => props.color};
`;

export const LargeText = styled.p`
  font-size: 20px;
`;

export const LargeTextBold = styled(LargeText)`
  font-weight: 700;
`;

export const BodyText = styled.p`
  font-size: 16px;
`;

export const BodyTextBold = styled(BodyText)`
  font-weight: 700;
`;

export const Tiny = styled.span`
  font-size: 12px;
`;

export const SpanError = styled.span`
  color: var(--danger);
  margin-top: 14px;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const SpanSuccess = styled.span`
  color: var(--success);
  margin-top: 14px;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
