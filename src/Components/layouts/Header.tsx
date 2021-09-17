import React from "react";
import { StyledHeader, Headline, Description } from "./Header.style";

interface Props {
  headline: string;
  description: string;
}

const Header = ({ headline, description }: Props) => {
  return (
    <StyledHeader>
      <Headline data-testid="form-header">{headline}</Headline>
      <Description>{description}</Description>
    </StyledHeader>
  );
};

export default Header;
