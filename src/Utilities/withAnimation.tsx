import React, { ComponentType } from "react";
import { SlideNext } from "../components/index.style";

const withAnimation = <P extends object = {}>(
  Component: ComponentType<P>,
  animationId: string
) => ({ ...rest }: P) => {
  return (
    <SlideNext>
      <Component {...rest} />
    </SlideNext>
  );
};

export default withAnimation;
