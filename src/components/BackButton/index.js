import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';

const StyledLink = styled(Link)`
  transition: .3s;
  &:hover {
    opacity: .5;
    text-decoration: none;
  }
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    background-color: #b2ae89;
    cursor: not-allowed;
  }
`;

export default function BackLinkArrow({ href }) {
  return (
    <StyledLink
      href={href}
      style={{
        width: '124px',
        height: '64px',
        display: 'inline',
        'text-decoration': 'none',
      }}
    >
      <Button>Jogar Novamente</Button>
    </StyledLink>
  );
}

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired,
};
