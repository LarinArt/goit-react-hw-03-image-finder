import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0 20px 0;

  background-image: ${({ theme }) => theme.colors.linearGgradient};
  box-shadow: ${({ theme }) => theme.colors.mainShadow};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchbarButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 30px;
  padding: 0;

  border: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondBgColor};
  color: ${({ theme }) => theme.colors.secondTextColor};

  cursor: pointer;
  transition: color ${({ theme }) => theme.colors.hoverAnimation};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentBgColor};
  }
`;

export const Input = styled.input`
  width: 180px;
  height: 30px;
  padding: 0 10px 0 10px;

  background-color: ${({ theme }) => theme.colors.mainBgColor};
  color: ${({ theme }) => theme.colors.mainTextColor};

  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  outline: none;

  &:focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }

  &::placeholder {
    color: #929292;
  }
`;
