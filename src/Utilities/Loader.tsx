import styled from "styled-components";
const StyledLoader = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  @keyframes Bounce {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-50px);
    }
  }
`;

const Bouncer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100px;

  div {
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    animation: Bounce 0.5s ease infinite alternate;
  }

  div:nth-child(2) {
    opacity: 0.8;
    animation-delay: 0.1s;
  }

  div:nth-child(3) {
    opacity: 0.6;
    animation-delay: 0.2s;
  }

  div:nth-child(4) {
    opacity: 0.4;
    animation-delay: 0.3s;
  }
`;

const Loader = () => (
  <StyledLoader data-testid="form-loader">
    <Bouncer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Bouncer>
  </StyledLoader>
);

export default Loader;
