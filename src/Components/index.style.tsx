import styled, { keyframes } from "styled-components";
import { slideInLeft, slideInRight } from "react-animations";

export const StyledFormWrapper = styled.div`
  height: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  font-family: "HelveticaNeue";
  z-index: 2;
  ::-webkit-scrollbar {
    display: none;
  }
  .active {
    animation: slider 0.5s ease-in;
  }

  @keyframes slider {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }
`;

export const Label = styled.div`
  font-family: "HelveticaNeue-Medium";
  margin: 15px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  margin: 15px;
  right: 0;
`;
export const Button = styled.button`
  background: black;
  color: white;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const slideRightAnimation = keyframes`${slideInRight}`;
const slideLeftAnimation = keyframes`${slideInLeft}`;

export const SlideNext = styled.div`
  animation: 1s ${slideRightAnimation};
`;

export const SlidePrevious = styled.div`
  animation: 1s ${slideLeftAnimation};
`;
