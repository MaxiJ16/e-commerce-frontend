import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .circles {
    width: 8px;
    height: 8px;
    animation: bounce 1s 0.7s linear infinite;
    border-radius: 100%;
    margin: 4px;
  }

  @media (min-width: 769px) {
    .circles {
      width: 10px;
      height: 10px;
    }
  }

  .circle-1,
  .circle-2,
  .circle-3 {
    background-color: var(--white);
  }

  .circle-2 {
    animation-delay: 0.2s;
  }

  .circle-3 {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: scale(1);
      filter: blur(0px);
    }

    25% {
      transform: scale(0.6);
    }

    75% {
      transform: scale(1.4);
    }
  }
`;

export const Loader = () => {
  return (
    <Container className="containerCircles">
      <div className="circle-1 circles"></div>
      <div className="circle-2 circles"></div>
      <div className="circle-3 circles"></div>
    </Container>
  );
};
