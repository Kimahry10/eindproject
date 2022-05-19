import styled from 'styled-components';
import { borderRadius, color } from '../../../styles';

const StyledLinkButtonNoBorder = styled.a`
  background: ${color.orange};
  color: ${color.white};
  text-align: center;
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  display: inline-block;
  border-radius: ${borderRadius.standardRadius};
  cursor: pointer;

  :hover {
    background: ${color.orangeHover};
  }
`;

const StyledLinkButtonWithBorder = styled.a`
  background: transparent;
  color: ${color.white};
  border: 1px solid ${color.orange};
  text-align: center;
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  display: inline-block;
  border-radius: ${borderRadius.standardRadius};
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`;

export { StyledLinkButtonNoBorder, StyledLinkButtonWithBorder };